import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    loadFeedback();
  }, []);

  const loadFeedback = async () => {
    try {
      const response = await axios.get("http://student-feedback-system-ocfd.onrender.com/feedback");
      setFeedbacks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFeedback = async (id) => {
    try {
      console.log("Deleting ID:", id);

      const response = await axios.delete(
        `http://localhost:5000/feedback/${id}`
      );

      console.log(response.data);

      alert("Feedback deleted successfully");

      loadFeedback();

    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-primary fw-bold">
          📊 Admin Dashboard
        </h2>

        <Link to="/" className="btn btn-danger">
          Logout
        </Link>
      </div>


      <div className="card bg-primary text-white shadow mt-4 mb-4">
        <div className="card-body">
          <h4>Total Feedback</h4>
          <h2>{feedbacks.length}</h2>
        </div>
      </div>


      {feedbacks.map((item) => (
        <div className="card shadow mb-3" key={item._id}>

          <div className="card-body">

            <h4>{item.name}</h4>

            <p>
              <b>Email:</b> {item.email}
            </p>

            <p>
              <b>Feedback:</b> {item.feedback}
            </p>

            <p>
              <b>Rating:</b> ⭐ {item.rating}
            </p>


            <button
              className="btn btn-danger"
              onClick={() => deleteFeedback(item._id)}
            >
              Delete Feedback
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

export default Admin;