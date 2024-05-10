const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

const airplaneRouter = require("./routes/airplaneRouter");
const userRouter = require("./routes/userRouter");
const profileRouter = require("./routes/profileRouter");
const airlineRouter = require("./routes/airlineRouter");
const routeRouter = require("./routes/routeRouter");
const destinationRouter = require("./routes/destinationRouter");
const orderRouter = require("./routes/orderRouter");
const downloadRouter = require("./routes/downloadRouter");
const transactionRouter = require("./routes/transactionRouter");

dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => console.log(err));

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.set("view engine", "ejs");

// Routers
app.use("/api/airplane", airplaneRouter);
app.use("/api/user", userRouter);
app.use("/api/profile", profileRouter);
app.use("/api/airline", airlineRouter);
app.use("/api/route", routeRouter);
app.use("/api/destination", destinationRouter);
app.use("/api/order", orderRouter);
app.use("/api/download", downloadRouter);
app.use("/api/transaction", transactionRouter);

// Base Route
app.get("/", (req, res) => {
  return res.send({ msg: "ok" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
