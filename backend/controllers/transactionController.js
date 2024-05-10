const Transaction = require("../models/transaction");

module.exports.getUserTransactions = async (req, res) => {
  const transactions = await Transaction.find({ user: req.user._id });
  return res.send(transactions);
};

module.exports.getTransactions = async (req, res) => {
  const transactions = await Transaction.find();
  return res.send(transactions);
};

module.exports.getTransaction = async (req, res) => {
  const id = req.params.id;

  const transaction = await Transaction.findById(id);
  if (!transaction) return res.status(404).send("Transaction not found");

  return res.send(transaction);
};
