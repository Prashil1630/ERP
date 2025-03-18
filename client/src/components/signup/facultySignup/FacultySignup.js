import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FacultySignup = () => {
  const [facultyData, setFacultyData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFacultyData({ ...facultyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (facultyData.password !== facultyData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Implement signup logic here (API call to backend)

    // After successful signup
    navigate("/login/facultylogin");
  };

  return (
    <div>
      <h2>Faculty Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={facultyData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={facultyData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={facultyData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={facultyData.confirmPassword} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default FacultySignup;
