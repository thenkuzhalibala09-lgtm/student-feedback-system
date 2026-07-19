app.post("/feedback", async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const feedback = new Feedback(req.body);
    const savedFeedback = await feedback.save();

    console.log("Saved:", savedFeedback);

    res.status(201).json({
      message: "Feedback submitted successfully"
    });

  } catch (error) {
    console.log("SAVE ERROR:", error);

    res.status(500).json({
      message: error.message
    });
  }
});