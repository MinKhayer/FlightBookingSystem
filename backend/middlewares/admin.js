module.exports = async (req, res, next) => {
  if (req.user.role === "Admin") {
    next();
  } else return res.status(401).send("Access Denied");
};
