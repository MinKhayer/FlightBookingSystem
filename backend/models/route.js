const { Schema, model } = require("mongoose");

const routeSchema = Schema(
  {
    name: String,
    from: { type: Schema.Types.ObjectId, ref: "Destination" },
    to: { type: Schema.Types.ObjectId, ref: "Destination" },
    departure: Number,
    arrival: Number,
    day: String,
    departureTerminal: Number,
    gate: String,
    arrivalTerminal: Number,
    checkIn: Number,
    cabin: Number,
  },
  { timestamps: true }
);

module.exports = model("Route", routeSchema);
