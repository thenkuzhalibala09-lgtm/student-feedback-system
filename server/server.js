const Feedback = require("./models/Feedback.js");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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


// Test Route
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});


// Add Feedback
app.post("/feedback", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);

    await feedback.save();

    res.json({
      message: "Feedback submitted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// Get Feedback
app.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();

    res.json(feedbacks);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


const deleteFeedback = async (id) => {
  console.log("ID to delete:", id);

  try {
    const response = await axios.delete(
      `http://localhost:5000/feedback/${id}`
    );

    console.log(response.data);

    alert("Deleted successfully");

    setFeedbacks(
      feedbacks.filter((item) => item._id !== id)
    );

  } catch (error) {
    console.log(error.response);
    alert("Delete failed");
  }
};


// Start Server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});