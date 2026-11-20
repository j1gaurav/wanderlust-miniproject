const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    name: String,
    place: String,
    rating: Number,
    text: String
});

module.exports = mongoose.model("Review", ReviewSchema);
