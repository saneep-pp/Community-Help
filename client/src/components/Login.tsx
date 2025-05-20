import React from "react";
import { LoginProps } from "../../types";
import LeftSection from "./LeftSection";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setShowSignup }: LoginProps) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("token", "fcsbivbdbdh7gvhee7fvv");
    navigate("/posts");
  };
  return (
    <div className="flex flex-col sm:flex-col-reverse lg:flex-row p-4 lg:p-7 bg-[#c6baec] gap-6 h-screen w-screen">
      {/* Left Section */}
      <LeftSection />

      {/* Right Section */}
      <div className="bg-white w-full lg:w-1/2 h-auto rounded-2xl flex items-center justify-center">
        <div className="flex flex-col justify-center items-center w-full h-full p-6 py-10">
          <div className="text-black font-semibold text-2xl">Welcome Back</div>
          <p className="text-gray-600 mt-2">Login to continue</p>
          <form className="w-full sm:w-3/4 px-2 mt-6">
            <input
              type="text"
              placeholder="Enter Username"
              className="border border-gray-300 rounded-lg p-2 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="border border-gray-300 rounded-lg p-2 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-[#927fce] hover:bg-[#815EEA] text-white font-semibold py-2 px-4 rounded-lg mt-6 w-full"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <p className="text-sm mt-5">
            Don't have an account yet?{" "}
            <a href="/signup" className="text-[#815EEA]">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
