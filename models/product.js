const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: String,
  category: String,
  stock: Boolean,
  description: String,
  image: String,
});

module.exports = mongoose.model("product", productSchema);
