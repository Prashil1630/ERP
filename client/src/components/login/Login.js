import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex justify-center"
      style={{
        // backgroundImage: url("https://www.bing.com/images/search?view=detailV2&id=C8553B1F844D6B530FCF28D9036875810617F2A6&thid=OIP.XNrCK4gcsIUxTvKbkrHs4gHaE8&mediaurl=https%3a%2f%2fcache.careers360.mobi%2fmedia%2fpresets%2f720X480%2fcolleges%2fsocial-media%2fmedia-gallery%2f1788%2f2018%2f2%2f19%2fMIT-WPU2.jpg&exph=480&expw=720&q=mit+wpu+pune+campus&simid=608019210970006854&ck=0EE41176E2A2DAAE5160B0D803DB14AF&itb=0&FORM=IVCLIG"),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center mt-10 space-y-32">
        <h1 className="text-3xl font-semibold bg-black text-white w-full text-center py-4 bg-opacity-75 rounded-2xl">
          MIT WORLD PEACE UNIVERSITY
        </h1>
        <div className="flex space-x-10">
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Faculty</h1>
            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Student</h1>
            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
          <div
            className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-opacity-60 rounded-xl"
            style={{ backgroundColor: "rgb(4, 189, 125)" }}
          >
            <h1 className="text-4xl font-extrabold">Admin</h1>
            <Link
              type="button"
              to="/login/adminlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;