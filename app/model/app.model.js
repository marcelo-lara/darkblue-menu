const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  title: String,
  description: String,
  qty: Number,
  tags: Array,

});

module.exports = mongoose.model("Item", itemSchema);