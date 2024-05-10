const { Schema, model } = require("mongoose");

const airlineSchema = Schema({
    name: String,
    code: String,
    logo: String
}, { timestamps: true });

module.exports = model('Airline', airlineSchema);