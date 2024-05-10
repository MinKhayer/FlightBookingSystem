const Destination = require("../models/destination");

// ! function for getting all destination
module.exports.getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    return res.send(destinations);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

// ! function for getting particular destination
module.exports.getDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    return res.send(destination);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

// ! function for creating destination
module.exports.createDestination = async (req, res) => {
  try {
    const body = req.body;
    const destination = new Destination(body);
    await destination.save();
    return res.status(201).send({
      message: `Destination named ${destination.name} created Successfully.`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

//! function for deleting a destination
module.exports.deleteDestination = async (req, res) => {
  try {
    const result = await Destination.deleteOne({ _id: req.params.id });
    res.send({ message: "Destination deleted successfully !!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
