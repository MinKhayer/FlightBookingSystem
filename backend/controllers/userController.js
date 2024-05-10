const User = require("../models/user");
const Profile = require("../models/profile");
const bcrypt = require("bcrypt");

// ! functionality for user registration
module.exports.register = async (req, res) => {
  try {
    user = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    if (user) return res.status(400).send("Email/ Username already used!");

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(req.body.password, salt);

    user = new User({ ...req.body, password: password });
    profile = new Profile({
      user: user._id,
      userImg: req.body.userImg,
    });

    const token = user.generateJWT(user._id, user.username, user.role);

    await user.save();
    await profile.save();

    return res.status(201).send({
      message: "Registration Successful!",
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

// ! functionality for user login
module.exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid email/username");

    const validUser = await bcrypt.compare(req.body.password, user.password);
    if (!validUser) return res.status(400).send("Invalid password!");

    const token = user.generateJWT(user._id, user.username, user.role);
    return res.status(200).send({
      message: "Login Successful!",
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//! functionality for getting user info
module.exports.user = async (req, res) => {
  try {
    const id = req.params.id;

    if (id !== null) {
      console.log("id in get user = ", id);
      const user = await User.findOne({ _id: id }).select(
        " username email userImg"
      );
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
};
