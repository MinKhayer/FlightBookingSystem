const SSLCommerzPayment = require("sslcommerz-lts");
const dotenv = require("dotenv");
const Profile = require("../models/profile");
const User = require("../models/user");
const Transaction = require("../models/transaction");
const Airplane = require("../models/airplane");
const Ticket = require("../models/ticket");
const _ = require("lodash");
const Passenger = require("../models/passenger");

const { sendMail } = require("../utilities/mailSender");
dotenv.config();

const redirectURL = "http://localhost:5173";

module.exports.init = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).send("User not found");

  const profile = await Profile.findOne({ user: req.user._id });
  if (!profile) return res.status(404).send("User profile not found");

  const { travelers, airplane, fare, passengers } = req.body;

  airplanes = airplane.map((a) => {
    return {
      _id: a._id,
      date: a.departureDay,
      route: a.route._id,
    };
  });

  const p = await Passenger.insertMany(passengers);

  const passenger_ids = p.reduce((a, b) => a.concat(b._id.toString()), []);

  const data = {
    total_amount: fare,
    currency: "BDT",
    tran_id: `AEROSKY-TRX-${new Date().getTime()}`,
    success_url: `http://localhost:${process.env.PORT}/api/order/success`,
    fail_url: `http://localhost:${process.env.PORT}/api/order/fail`,
    cancel_url: `http://localhost:${process.env.PORT}/api/order/cancel`,
    shipping_method: "No",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: profile.name,
    cus_email: user.email,
    cus_add1: profile.address,
    cus_city: profile.city,
    cus_state: profile.state,
    cus_postcode: 1230,
    cus_country: profile.country,
    cus_phone: profile.phone,
    value_a: JSON.stringify(airplanes).replaceAll('"', "*"),
    value_b: user._id.toString(),
    value_c: airplane[0].bookingClass,
    value_d: JSON.stringify(passenger_ids).replaceAll('"', "*"),
  };

  // return res.send({ status: false });
  const ssl = new SSLCommerzPayment(
    process.env.STORE_ID,
    process.env.STORE_PASSWORD,
    false
  );
  ssl
    .init(data)
    .then((apiResponse) => {
      // console.log("api response = ", apiResponse);
      // console.log("url = ", apiResponse.GatewayPageURL);
      return res.send({ status: true, url: apiResponse.GatewayPageURL });
    })
    .catch((err) => console.log(err));
};

module.exports.checkout = async (req, res) => {
  const travelers = req.body[0].travelers;

  const fare = req.body.reduce((a, b) => (a += b.basePrice), 0);
  const tax = req.body.reduce((a, b) => (a += b.tax), 0);

  return res.send({
    travelers: travelers,
    airplane: req.body,
    fare: fare + tax,
  });
};

module.exports.success = async (req, res) => {
  let {
    value_a: airplanes,
    value_b: user_id,
    value_c: bookingClass,
    value_d: passengers,
    tran_id,
    amount,
    bank_tran_id,
    store_amount,
    card_issuer,
    currency,
  } = req.body;

  if (!passengers) return res.status(400).send("Bad Request");
  const trans = await Transaction.findOne({ trx: tran_id });
  if (trans) return res.status(400).send("Transaction already fulfilled");

  airplanes = JSON.parse(airplanes.replaceAll("*", '"'));
  passengers = JSON.parse(passengers.replaceAll("*", '"'));

  console.log(airplanes);

  const user = await User.findById(user_id);
  const profile = await Profile.findOne({ user: user_id });

  let tickets = [];
  let airplane_ids = [];
  passengers.map((p) => {
    airplanes.map((a) => {
      airplane_ids.push(a._id);
      tickets.push({
        user: user_id,
        passenger: p,
        airplane: a._id,
        date: a.date,
        departureDate: new Date(a.date).getDate(),
        route: a.route,
      });
    });
  });

  for (let i = 0; i < airplane_ids.length; i++) {
    let a = airplane_ids[i];
    if (bookingClass === "economy") {
      await Airplane.updateOne({ _id: a }, { $inc: { bookedEconomySeats: 1 } });
    } else if (bookingClass === "business") {
      await Airplane.updateOne(
        { _id: a },
        { $inc: { bookedBusinessSeats: 1 } }
      );
    } else {
      await Airplane.updateOne(
        { _id: a },
        { $inc: { bookedFirstClassSeats: 1 } }
      );
    }
  }

  const t = await Ticket.insertMany(tickets);

  const ticket_ids = t.reduce((a, b) => a.concat(b._id), []);

  const downloadLinks = [];

  for (let i = 0; i < ticket_ids.length; i++) {
    let tic = ticket_ids[i].toString();
    downloadLinks.push(`http://localhost:4003/api/download/ticket/${tic}`);
  }

  let a = downloadLinks.join("\n ");

  const mailOptions = {
    from: `AeroSky <${process.env.MAIL_USERNAME}>`,
    to: [user.email],
    subject: "[AeroSky] Ticket Confirmation",
    text: `Your ticket purchase is confirmed download your tickets from the below links: ${a}`,
  };

  sendMail(mailOptions);

  const transaction = new Transaction({
    user: user_id,
    tickets: ticket_ids,
    amount: amount,
    store_amount: store_amount,
    trx: tran_id,
    bank_tran_id: bank_tran_id,
    card_issuer: card_issuer,
    currency: currency,
  });

  await transaction.save();

  // return res.redirect(`${redirectURL}/success/?trx=${123}`);
  return res.redirect(`${redirectURL}/success?trx=${transaction._id}`);
};

module.exports.fail = async (req, res) => {
  return res.redirect(`${redirectURL}`);
};

module.exports.cancel = async (req, res) => {
  return res.redirect(`${redirectURL}`);
};
