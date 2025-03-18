import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentSignup = () => {
  const [studentData, setStudentData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentData.password !== studentData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Implement signup logic here (API call to backend)

    // After successful signup
    navigate("/login/studentlogin");
  };

  return (
    <div>
      <h2>Student Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={studentData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={studentData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={studentData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={studentData.confirmPassword} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default StudentSignup;
