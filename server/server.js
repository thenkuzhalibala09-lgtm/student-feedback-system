const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Feedback = require("./models/Feedback");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://thenkuzhalibala09_db_user:hNPWSRTVSMHTGDbd@cluster0.cv6xgoq.mongodb.net/studentfeedback?appName=Cluster0")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

// Test route
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

// Submit feedback
app.post("/feedback", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();

    res.status(201).json({
      message: "Feedback submitted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error submitting feedback",
      error: error.message
    });
  }
});

// Get feedback
app.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);

  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete feedback
app.delete("/feedback/:id", async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);

    res.json({
      message: "Feedback deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Delete failed"
    });
  }
});


app.listen(5000, () => {
  console.log("Server started on port 5000");
});