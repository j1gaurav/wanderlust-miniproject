console.log("SERVER FILE UPDATED");
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Review = require("./models/Review");
const Inquiry = require("./models/Inquiry");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/hello", (req, res) => {
    console.log("HELLO ROUTE HIT");
    res.send("HELLO WORKS");
});
app.get("/hello", (req, res) => {
    res.send("HELLO WORKS");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:");
    console.log(err.message);
  });

// Home Route
app.get("/", (req, res) => {
  res.send("Wanderlust Backend Running!");
});

// Test Route
app.get("/test", (req, res) => {
  console.log("Test route was hit!");
  res.send("Test Works!");
});

// Save Test Review
app.get("/add-review", async (req, res) => {
  try {
    const review = new Review({
      name: "Gaurav",
      place: "Jaipur",
      rating: 5,
      text: "Amazing destination!"
    });

    await review.save();

    res.send("✅ Review Saved Successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send("❌ Error saving review");
  }
});
app.get("/reviews", async (req, res) => {

    try {

        const reviews = await Review.find();

        res.json(reviews);

    } catch (error) {

        res.status(500).send(error.message);

    }

});
app.post("/api/reviews", async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.json(review);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});
app.get("/api/reviews", async (req, res) => {

  const reviews = await Review.find();

  res.json(reviews);

});

// Start Server
app.post("/api/inquiries", async (req, res) => {

    try {

        const inquiry = await Inquiry.create(req.body);

        res.json(inquiry);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});
app.get("/api/inquiries", async (req, res) => {

    try {

        const inquiries = await Inquiry.find();

        res.json(inquiries);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});
// Save Inquiry

console.log("Inquiry routes loaded");
app.get("/hello", (req, res) => {
    res.send("HELLO WORKS");
});
app.listen(5000, () => {
  console.log("🚀 Server started on port 5000");
});
