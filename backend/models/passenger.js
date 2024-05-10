const { Schema, model } = require("mongoose");

const passengerSchema = Schema(
  {
    userName: String,
    userEmail: String,
    userPhone: { type: String, default: "none" },
    userCity: { type: String, default: "none" },
    userCountry: { type: String, default: "none" },
    userNid: { type: Number, default: 1200 },
  },
  { timestamps: true }
);

module.exports = model("Passenger", passengerSchema);
