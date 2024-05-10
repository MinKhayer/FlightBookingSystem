const express = require("express");
const {
  getRoutes,
  createRoute,
  getRoute,
  deleteRoute,
} = require("../controllers/routeController");
const router = express.Router();
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");

router.route("/").get(getRoutes).post([authorize, admin], createRoute);
router.route("/:id").get(getRoute).delete([authorize, admin], deleteRoute);

module.exports = router;
