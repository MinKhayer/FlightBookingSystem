const express = require("express");
const {
  getAirlines,
  createAirline,
  deleteAirline,
} = require("../controllers/airlineController");
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");
const router = express.Router();

router.route("/").get(getAirlines).post([authorize, admin], createAirline);
router.route("/:id").delete([authorize, admin], deleteAirline);

module.exports = router;
