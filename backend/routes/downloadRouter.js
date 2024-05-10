const {
  downloadCSV,
  downloadTicket,
} = require("../controllers/downloadController");
const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");

// router.route("/:id").get([authorize, admin], downloadCSV);
router.route("/ticket/:id").get(downloadTicket);

module.exports = router;
