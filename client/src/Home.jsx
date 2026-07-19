import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #4facfe, #00c6fb)",
      }}
    >
      <div className="card shadow-lg p-5 text-center" style={{ width: "600px", borderRadius: "20px" }}>
        <h1 className="text-primary fw-bold">
          🎓 Smart Student Feedback Management System
        </h1>

        <p className="text-secondary mt-3">
          Welcome! This system helps students submit feedback and enables
          administrators to manage and review feedback efficiently.
        </p>

        <div className="mt-4">
          <Link to="/student-login" className="btn btn-success btn-lg me-3">
            👨‍🎓 Student Login
          </Link>

          <Link to="/admin-login" className="btn btn-primary btn-lg">
            👨‍💼 Admin Login
          </Link>
        </div>

        <hr />

        <p className="text-muted">
          Developed using React.js • Express.js • MongoDB
        </p>
      </div>
    </div>
  );
}

export default Home;