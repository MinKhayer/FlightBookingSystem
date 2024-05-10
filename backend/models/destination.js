const { Schema, model } = require("mongoose");

const destinationSchema = Schema(
  {
    name: String,
    airport: String,
  },
  { timestamps: true }
);

module.exports = model("Destination", destinationSchema);
