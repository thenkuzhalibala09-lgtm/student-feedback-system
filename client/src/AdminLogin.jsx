import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "admin" && password === "admin123") {
      navigate("/admin");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      }}
    >
      <div
        className="card shadow-lg p-5"
        style={{
          width: "400px",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <h2 className="text-center text-primary fw-bold mb-4">
          👨‍💼 Admin Login
        </h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={login}
        >
          Login
        </button>

        <p className="text-center text-muted mt-4">
          Smart Student Feedback Management System
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;