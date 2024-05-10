const { Schema, model } = require("mongoose");

const airplaneSchema = Schema(
  {
    name: String,
    airline: {
      type: Schema.Types.ObjectId,
      ref: "Airline",
    },
    model: String,
    code: String,
    serial: Number,
    economySeats: Number,
    businessSeats: Number,
    firstClassSeats: Number,
    bookedEconomySeats: { type: Number, default: 0 },
    bookedBusinessSeats: { type: Number, default: 0 },
    bookedFirstClassSeats: { type: Number, default: 0 },
    routes: [
      {
        route: { type: Schema.Types.ObjectId, ref: "Route" },
        economyFare: Number,
        businessFare: Number,
        firstClassFare: Number,
        childDiscount: Number,
      },
    ],
  },
  { timestamps: true }
);

airplaneSchema.virtual("availableEconomySeats").get(function () {
  return this.economySeats - this.bookedEconomySeats;
});

airplaneSchema.virtual("availableBusinessSeats").get(function () {
  return this.businessSeats - this.bookedBusinessSeats;
});

airplaneSchema.virtual("availableFirstClassSeats").get(function () {
  return this.firstClassSeats - this.bookedFirstClassSeats;
});

module.exports = model("Airplane", airplaneSchema);
