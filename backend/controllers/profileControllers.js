const Profile = require("../models/profile");
const User = require("../models/user");
const _ = require("lodash");

module.exports.getProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    if (!user) return res.status(400).send("User not found");

    profile = await Profile.findOne({ user: user._id }).populate("user", [
      "name",
      "phone",
      "email",
    ]);
    if (!profile) return res.status(400).send("profile not found");

    return res.send(profile);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

//! function for updating user profile
module.exports.updateProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    if (!user) return res.status(400).send("User not found");

    const { name, phone, address, city, state, country, postcode } = req.body;

    console.log("user id in profile update = ", req.user._id);

    const profile = await Profile.findOne({ user: req.user._id }).populate(
      "user",
      ["name", "email"]
    );
    if (profile.user._id.toString() != req.user._id)
      return res.status(403).send("Forbidden");

    profile.address = address;
    profile.city = city;
    profile.state = state;
    profile.country = country;
    profile.postcode = postcode;
    profile.name = name;
    profile.phone = phone;

    await profile.save();

    return res.send(profile);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
