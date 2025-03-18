import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { adminSignUp } from "../../../redux/actions/adminActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Spinner from "../../../utils/Spinner";

const AdminSignup = () => {
  const [translate, setTranslate] = useState(false);
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state);
  const [error, setError] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setTranslate(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (store.errors) {
      setError(store.errors);
    }
  }, [store.errors]);

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (adminData.password !== adminData.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }
    dispatch(adminSignUp(adminData, navigate));
  };

  useEffect(() => {
    if (store.errors) {
      setLoading(false);
      setAdminData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [store.errors]);

  return (
    <div className="bg-[#04bd7d] h-screen w-screen flex items-center justify-center">
      <div className="grid grid-cols-2">
        <div
          className={`h-auto w-96 bg-white flex items-center justify-center ${
            translate ? "translate-x-[12rem]" : ""
          } duration-1000 transition-all rounded-3xl shadow-2xl`}
        >
          <h1 className="text-[3rem] font-bold text-center">
            Admin
            <br />
            Sign Up
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`w-96 bg-[#2c2f35] flex flex-col items-center justify-center ${
            translate ? "-translate-x-[12rem]" : ""
          } duration-1000 transition-all space-y-6 rounded-3xl shadow-2xl py-8`}
        >
          <h1 className="text-white text-3xl font-semibold">Admin</h1>
          {["name", "email", "password", "confirmPassword"].map((field, index) => (
            <div key={index} className="space-y-1 w-[14rem]">
              <p className="text-[#515966] font-bold text-sm capitalize">{field}</p>
              <div className="bg-[#515966] rounded-lg flex items-center">
                <input
                  onChange={handleChange}
                  value={adminData[field]}
                  name={field}
                  type={field.includes("password") ? (field === "password" ? showPassword : showConfirmPassword) ? "text" : "password" : "text"}
                  required
                  className="bg-[#515966] text-white px-2 py-2 rounded-lg outline-none placeholder:text-sm"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                />
                {(field === "password" || field === "confirmPassword") && (
                  (showPassword || showConfirmPassword) ? (
                    <VisibilityIcon
                      onClick={() => field === "password" ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={() => field === "password" ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword)}
                      className="cursor-pointer"
                    />
                  )
                )}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="w-32 hover:scale-105 transition-all duration-150 rounded-lg flex items-center justify-center text-white text-base py-1 bg-[#04bd7d]"
          >
            Sign Up
          </button>
          {loading && (
            <Spinner
              message="Signing Up"
              height={30}
              width={150}
              color="#ffffff"
              messageColor="#fff"
            />
          )}
          {(error.usernameError || error.passwordError) && (
            <p className="text-red-500">
              {error.usernameError || error.passwordError}
            </p>
          )}
          <p className="text-white">
            Already have an account?{" "}
            <Link to="/login/adminlogin" className="text-blue-500">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
