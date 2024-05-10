const { Schema, model } = require("mongoose");

const ticketSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    passenger: {
      type: Schema.Types.ObjectId,
      ref: "Passenger",
    },
    airplane: { type: Schema.Types.ObjectId, ref: "Airplane" },
    route: { type: Schema.Types.ObjectId, ref: "Route" },
    date: Date,
    departureDate: Number,
  },
  { timestamps: true }
);

module.exports = model("Ticket", ticketSchema);
