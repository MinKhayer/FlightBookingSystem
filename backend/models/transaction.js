const { Schema, model } = require("mongoose");

const transactionSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    currency: String,
    bank_tran_id: String,
    card_issuer: String,
    amount: Number,
    store_amount: Number,
    trx: String,
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  },
  { timestamps: true }
);

module.exports = model("Transaction", transactionSchema);
