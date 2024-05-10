const { Schema, model } = require("mongoose");
const dotenv = require("dotenv");
const JWT = require("jsonwebtoken");

dotenv.config();

const userSchema = Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    password: String,
    role: { type: String, default: "Passenger", enum: ["Admin", "Passenger"] },
  },
  { timestamps: true }
);

userSchema.methods.generateJWT = (_id, username, role) => {
  const token = JWT.sign(
    {
      _id: _id,
      username: username,
      role: role,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" }
  );
  return token;
};

module.exports = model("User", userSchema);
