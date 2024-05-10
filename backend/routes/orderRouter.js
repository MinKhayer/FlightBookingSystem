const {
  init,
  checkout,
  success,
  fail,
  cancel,
} = require("../controllers/orderController");
const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");

router.route("/init").post([authorize], init);

router.route("/checkout").post([authorize], checkout);

router.route("/success").post(success);
router.route("/fail").post(fail);
router.route("/cancel").post(cancel);

module.exports = router;
