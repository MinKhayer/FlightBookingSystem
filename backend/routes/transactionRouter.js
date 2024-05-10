const {
  getUserTransactions,
  getTransaction,
  getTransactions,
} = require("../controllers/transactionController");
const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");

router.route("/").get([authorize, admin], getTransactions);
router.route("/user").get([authorize], getUserTransactions);
router.route("/:id").get([authorize], getTransaction);

module.exports = router;
