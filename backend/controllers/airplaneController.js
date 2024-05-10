const Airplane = require("../models/airplane");
const Airline = require("../models/airline");
const Destination = require("../models/destination");
const Route = require("../models/route");
const Ticket = require("../models/ticket");
const _ = require("lodash");
const passenger = require("../models/passenger");
const { use } = require("../routes/downloadRouter");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

//! function for get all airplane
module.exports.getPlanes = async (req, res) => {
  const airplanes = await Airplane.find().select({ routes: 0 });
  return res.send(airplanes);
};

//! function for get particular airplane
module.exports.getPlane = async (req, res) => {
  const airplane = await Airplane.findById(req.params.id).populate("airline", [
    "name",
  ]);
  if (!airplane) return res.status(404).send("Airplane not found");
  return res.send(airplane);
};

//! function for creating airplane
module.exports.createPlane = async (req, res) => {
  const body = req.body;
  const airline = await Airline.findById(req.body.airline);
  if (!airline) return res.send("Airline does not exists");
  const airplane = new Airplane(body);
  await airplane.save();
  return res.status(201).send({
    message: `Airplane ${airplane.name} for ${airline.name} created Successfully.`,
  });
};

//! function for assigning route
module.exports.assignRoute = async (req, res) => {
  const airplane = await Airplane.findById(req.params.id);
  if (!airplane) return res.status(404).send("Airplane not found");

  const route = await Route.findById(req.body.route);
  if (!route) return res.status(404).send("Route not found");

  airplane.routes.push(req.body);
  await airplane.save();

  return res.status(201).send({
    message: `Route assigned to airplane ${airplane.name}.`,
  });
};

// !function for deleting a airplane
module.exports.deleteAirplane = async (req, res) => {
  await Airplane.deleteOne({ _id: req.params.id });
  res.send({ message: "airplane deleted successfully " });
};

//! function for search plane
module.exports.searchPlane = async (req, res) => {
  const {
    from,
    to,
    departure,
    roundTrip,
    returnDate,
    travelers,
    bookingClass,
  } = req.body;

  console.log(req.body);

  const airplanes = await Airplane.find()
    .populate("airline", ["name", "code", "logo"])
    .populate("routes.route");

  let weekday = new Date(departure).getDay();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let routeName;

  fareClassSeats = "";
  fareClass = "";
  switch (bookingClass) {
    case "economy":
      fareClass = "economyFare";
      fareClassSeats = "EconomySeats";
      break;
    case "business":
      fareClass = "businessFare";
      fareClassSeats = "BusinessSeats";
      break;
    case "first class":
      fareClass = "firstClassFare";
      fareClassSeats = "FirstClassSeats";
      break;
  }

  query = `available${fareClassSeats}`;

  const matchedAirplanes = [];

  airplanes.map((a) => {
    a[query] > 0 &&
      a.routes?.map((r) => {
        const { route } = r;
        let names = route.name.split(" ");
        let source = names[0];
        let target = names[2];
        routeName = source + " To " + target;
        if (
          from === source &&
          target === to &&
          weekdays[weekday] === route.day
        ) {
          matchedAirplanes.push(_.pick(a, ["_id", "name", "airline", "model"]));
          // matchedAirplanes[matchedAirplanes.length - 1].route = r;

          let price = 0;
          let fareCategory;
          if (bookingClass === "economy") {
            price =
              travelers.adult * r.economyFare +
              (travelers.children * r.economyFare -
                (travelers.children * r.economyFare * r.childDiscount) / 100);
            fareCategory = "economyFare";
          } else if (bookingClass === "business") {
            price =
              travelers.adult * r.businessFare +
              (travelers.children * r.businessFare -
                (travelers.children * r.businessFare * r.childDiscount) / 100);
            fareCategory = "businessFare";
          } else if (bookingClass === "first class") {
            price =
              travelers.adult * r.firstClassFare +
              (travelers.children * r.firstClassFare -
                (travelers.children * r.firstClassFare * r.childDiscount) /
                  100);
            fareCategory = "firstClassFare";
          }
          matchedAirplanes[matchedAirplanes.length - 1].travelers = travelers;
          matchedAirplanes[matchedAirplanes.length - 1].departureDay = new Date(
            departure
          );
          matchedAirplanes[matchedAirplanes.length - 1].direction = "Forward";

          matchedAirplanes[matchedAirplanes.length - 1].basePrice = price;
          matchedAirplanes[matchedAirplanes.length - 1].availableSeats =
            a[query];
          matchedAirplanes[matchedAirplanes.length - 1].bookingClass =
            bookingClass;
          matchedAirplanes[matchedAirplanes.length - 1].tax = price * 0.15;
          matchedAirplanes[matchedAirplanes.length - 1].fareCategory =
            fareCategory;
          matchedAirplanes[matchedAirplanes.length - 1].route = _.pick(
            r.route,
            ["name", "from", "to", "departure", "arrival", "day", "_id"]
          );
          matchedAirplanes[matchedAirplanes.length - 1].fareTypes = _.pick(r, [
            "economyFare",
            "businessFare",
            "firstClassFare",
            "childDiscount",
          ]);
        }
      });
  });

  let roundTripFound = false;
  if (roundTrip && matchedAirplanes.length > 0) {
    weekday = new Date(returnDate).getDay();
    airplanes.map((a) => {
      a[query] > 0 &&
        a.routes?.map((r) => {
          const { route } = r;
          let names = route.name.split(" ");
          let source = names[0];
          let target = names[2];
          if (
            source === to &&
            target === from &&
            weekdays[weekday] === route.day
          ) {
            matchedAirplanes.push(
              _.pick(a, ["_id", "name", "airline", "model"])
            );
            // matchedAirplanes[matchedAirplanes.length - 1].route = r;

            let price = 0;
            let fareCategory;
            if (bookingClass === "economy") {
              price =
                travelers.adult * r.economyFare +
                (travelers.children * r.economyFare -
                  (travelers.children * r.economyFare * r.childDiscount) / 100);
              fareCategory = "economyFare";
            } else if (bookingClass === "business") {
              price =
                travelers.adult * r.businessFare +
                (travelers.children * r.businessFare -
                  (travelers.children * r.businessFare * r.childDiscount) /
                    100);
              fareCategory = "businessFare";
            } else if (bookingClass === "first class") {
              price =
                travelers.adult * r.firstClassFare +
                (travelers.children * r.firstClassFare -
                  (travelers.children * r.firstClassFare * r.childDiscount) /
                    100);
              fareCategory = "firstClassFare";
            }
            matchedAirplanes[matchedAirplanes.length - 1].travelers = travelers;
            matchedAirplanes[matchedAirplanes.length - 1].departureDay =
              new Date(returnDate);
            matchedAirplanes[matchedAirplanes.length - 1].direction =
              "Backward";
            matchedAirplanes[matchedAirplanes.length - 1].basePrice = price;
            matchedAirplanes[matchedAirplanes.length - 1].fareCategory =
              fareCategory;
            matchedAirplanes[matchedAirplanes.length - 1].availableSeats =
              a[query] + parseInt(Math.random(0, 10) * 10);
            matchedAirplanes[matchedAirplanes.length - 1].bookingClass =
              bookingClass;
            matchedAirplanes[matchedAirplanes.length - 1].tax = price * 0.15;
            matchedAirplanes[matchedAirplanes.length - 1].route = _.pick(
              r.route,
              ["name", "from", "to", "departure", "arrival", "day", "_id"]
            );
            matchedAirplanes[matchedAirplanes.length - 1].fareTypes = _.pick(
              r,
              ["economyFare", "businessFare", "firstClassFare", "childDiscount"]
            );
            roundTripFound = true;
          }
        });
    });
  }

  for (let i = 0; i < matchedAirplanes.length; i++) {
    let m = matchedAirplanes[i];
    let s = await Destination.findById(m.route.from);
    let d = await Destination.findById(m.route.to);
    m.route.from = _.pick(s, ["name", "airport"]);
    m.route.to = _.pick(d, ["name", "airport"]);
  }

  if (matchedAirplanes.length > 0) {
    if (roundTrip && roundTripFound) {
      return res.send({
        status: true,
        message: "Planes Found",
        airplanes: matchedAirplanes,
        routeName: routeName,
        roundTrip: true,
      });
    } else if (roundTrip) {
      return res.send({
        status: true,
        message: "No return plane found",
        airplanes: matchedAirplanes,
        routeName: routeName,
        roundTrip: true,
      });
    } else {
      return res.send({
        status: true,
        message: "Planes Found",
        airplanes: matchedAirplanes,
        routeName: routeName,
        roundTrip: false,
      });
    }
  }

  return res.send({
    status: false,
    message: "No planes found for your specified route",
  });
};

module.exports.upcomingPlanes = async (req, res) => {
  const twoDaysLater = new Date();
  twoDaysLater.setDate(twoDaysLater.getDate() + 2);

  const tickets = await Ticket.find({
    date: {
      $gte: new Date(),
      $lt: twoDaysLater,
    },
  });

  let airplane_ids = [];
  tickets.map((t) => {
    if (!airplane_ids.includes(t.airplane.toString()))
      airplane_ids.push(t.airplane.toString());
  });

  const airplanes = await Airplane.find({
    _id: { $in: airplane_ids },
  })
    .select({ routes: 0 })
    .populate("airline");

  return res.send(airplanes);
};

module.exports.planeTrips = async (req, res) => {
  const id = req.params.id;
  const twoDaysLater = new Date();
  twoDaysLater.setDate(twoDaysLater.getDate() + 2);

  const tickets = await Ticket.find({
    airplane: id,
    date: {
      $gte: new Date(),
      $lt: twoDaysLater,
    },
  })
    .populate("route")
    .populate("airplane");

  const uniqueTrips = [];
  const results = [];
  tickets.map((t) => {
    if (!uniqueTrips.includes(t.route._id.toString())) {
      results.push({
        route: t.route,
        airplane: t.airplane,
        date: t.departureDate,
      });
      uniqueTrips.push(t.route._id.toString());
    }
  });

  return res.send(results);
};

module.exports.tripPassengers = async (req, res) => {
  const id = req.params.id;
  const route = req.params.route;
  const date = req.params.date;

  let data = await Ticket.find({
    airplane: id,
    departureDate: date,
    route: route,
  })
    .populate("passenger")
    .populate("route");

  console.log(data);
  const users = [];

  for (let i = 0; i < data.length; i++) {
    let user = data[i].passenger;
    users.push({
      name: user.userName,
      phone: user.userPhone,
      city: user.userCity,
      nid: user.userNid,
      country: user.userCountry,
    });
  }

  const csvWriter = createCsvWriter({
    path: "csv/users.csv",
    header: [
      { id: "name", title: "Name" },
      { id: "phone", title: "Phone" },
      { id: "city", title: "City" },
      { id: "nid", title: "NID/Birth Certificate" },
      { id: "country", title: "Country" },
    ],
  });
  csvWriter
    .writeRecords(users)
    .then(() => {
      console.log("CSV file written successfully");
      return res.download("csv/users.csv"); // Download the generated CSV file
    })
    .catch((error) => {
      console.error("Error writing CSV file:", error);
      return res.status(500).send("Error generating CSV file");
    });

  // return res.send(data);
};
