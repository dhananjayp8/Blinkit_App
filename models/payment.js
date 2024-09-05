const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "order",
  },
  amount: Number,
  method: String,
  status: String,
  transactionId: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  totalPrice: Number,
});

module.exports = mongoose.model("payment", paymentSchema);
