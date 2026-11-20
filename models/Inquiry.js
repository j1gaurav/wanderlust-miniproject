const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  place: String,
  message: String
});

module.exports = mongoose.model("Inquiry", InquirySchema);