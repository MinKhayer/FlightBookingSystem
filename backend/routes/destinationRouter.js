const {
  getDestinations,
  createDestination,
  getDestination,
  deleteDestination,
} = require("../controllers/destinationController");
const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");

router
  .route("/")
  .get(getDestinations)
  .post([authorize, admin], createDestination);
router
  .route("/:id")
  .get(getDestination)
  .delete([authorize, admin], deleteDestination);

module.exports = router;
