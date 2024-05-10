const express = require("express");
const router = express.Router();
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");
const {
  getPlanes,
  createPlane,
  searchPlane,
  getPlane,
  assignRoute,
  deleteAirplane,
  upcomingPlanes,
  planeTrips,
  tripPassengers,
} = require("../controllers/airplaneController");

router.route("/").get(getPlanes).post([authorize, admin], createPlane);

router.route("/search").post(searchPlane);
router.route("/upcoming").get([authorize, admin], upcomingPlanes);
router.route("/upcoming/:id").get([authorize, admin], planeTrips);
router.route("/upcoming/:id/:route/:date").get(tripPassengers);

router.route("/:id").get(getPlane).delete([authorize, admin], deleteAirplane);

router.route("/:id/assign").post([authorize, admin], assignRoute);

module.exports = router;
