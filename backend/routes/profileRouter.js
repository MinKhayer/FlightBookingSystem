const router = require("express").Router();
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileControllers");
const authorize = require("../middlewares/authorize");
const { route } = require("./airplaneRouter");

// router
//   .route("/")
//   .get([authorize], getProfile)
//   .patch([authorize], updateProfile);

// router.route("/:id").get([authorize], getProfile);
router.route("/:id").get(getProfile);
router.route("/:id").patch([authorize], updateProfile);

module.exports = router;
