import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitFeedback = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/feedback", formData);

      alert("✅ Feedback submitted successfully!");

      setFormData({
        name: "",
        email: "",
        feedback: "",
        rating: ""
      });

    } catch (error) {
      alert("❌ Error submitting feedback");
      console.log(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4facfe, #00c6fb)"
      }}
    >
      <div
        className="card shadow-lg p-5"
        style={{
          width: "550px",
          borderRadius: "20px"
        }}
      >
        <h2 className="text-center text-primary fw-bold mb-4">
          📝 Student Feedback Form
        </h2>

        <form onSubmit={submitFeedback}>

          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Feedback</label>
            <textarea
              name="feedback"
              className="form-control"
              rows="4"
              placeholder="Write your feedback..."
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label">Rating</label>
            <select
              name="rating"
              className="form-select"
              value={formData.rating}
              onChange={handleChange}
              required
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Submit Feedback
          </button>

        </form>
      </div>
    </div>
  );
}

export default Feedback;