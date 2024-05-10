const Airline = require("../models/airline");

//! function for Get airlines
module.exports.getAirlines = async (req, res) => {
  try {
    const airlines = await Airline.find();
    return res.send(airlines);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

//! function for creating airline
module.exports.createAirline = async (req, res) => {
  try {
    const body = req.body;
    const airline = new Airline(body);
    await airline.save();
    return res.status(201).send({
      message: `Airline named ${airline.name} created Successfully.`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

//! function for deleting airline

module.exports.deleteAirline = async (req, res) => {
  try {
    const result = await Airline.deleteOne({ _id: req.params.id });
    res.send({ message: "Airline deleted successfully !! " });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
