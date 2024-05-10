const Route = require("../models/route");
const Destination = require("../models/destination");

module.exports.getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    return res.send(routes);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

module.exports.getRoute = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id)
      .populate("from", ["name", "airport"])
      .populate("to", ["name", "airport"]);
    if (!route) return res.status(404).send("Route not found");
    return res.send(route);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

//! function for creating a route
module.exports.createRoute = async (req, res) => {
  try {
    const { from, to, departure, arrival, day } = req.body;

    const source = await Destination.findById(from);
    if (!source) return res.status(404).send("Source not found");

    const destination = await Destination.findById(to);
    if (!destination) return res.status(404).send("Destination not found");

    const route = new Route({
      ...req.body,
      name: `${source.name} to ${destination.name}`,
    });
    await route.save();
    return res.status(201).send({
      message: `Route from ${source.name} to ${destination.name} created Successfully.`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

//! function for deleting route
module.exports.deleteRoute = async (req, res) => {
  try {
    const route = await Route.deleteOne({ _id: req.params.id });
    return res.send({
      message: `Route deleted Successfully.`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
