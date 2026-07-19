import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import StudentLogin from "./StudentLogin";
import AdminLogin from "./AdminLogin";
import Feedback from "./Feedback";
import Admin from "./Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;