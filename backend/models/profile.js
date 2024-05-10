const { Schema, model } = require("mongoose");

const profileSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
    phone: { type: String, default: "none" },
    address: { type: String, default: "none" },
    city: { type: String, default: "none" },
    state: { type: String, default: "none" },
    postcode: { type: Number, default: 1200 },
    country: { type: String, default: "Bangladesh" },
    passport: String,
    nid: String,
    userImg: String,
  },
  { timestamps: true }
);

module.exports = model("Profile", profileSchema);
