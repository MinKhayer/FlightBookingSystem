const { register, login, user } = require("../controllers/userController");
const router = require("express").Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.get("/:id", user);

module.exports = router;
