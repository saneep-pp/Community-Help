import React from "react";
import { LoginProps } from "../../types";

const Login = ({ setToken, setShowSignup }: LoginProps) => {
  return (
    <div className="flex flex-col sm:flex-col-reverse lg:flex-row p-4 lg:p-7 bg-[#c6baec] gap-6 h-screen w-screen">
      {/* Left Section */}
      <div className="bg-gradient-to-r from-[#624985] via-[#815EEA] to-[#927fce] w-full lg:w-3/4 h-auto lg:h-full rounded-2xl">
        <div className="flex flex-col items-center justify-center p-6 lg:p-10 h-full text-center">
          <h1 className="text-white text-3xl lg:text-4xl font-extrabold">
            Community Help
          </h1>
          <h4 className="text-white font-normal pt-2 text-lg">
            Where Needs Meet Kindness
          </h4>
          <p className="text-white mt-6 text-sm lg:text-base max-w-xl">
            Everyone needs help sometimes. Here, you can post your requirements
            openly and see how others are stepping up to support their
            communities. Whether it’s something big or small, there’s always
            someone willing to lend a hand. Let’s build something better —
            together.
          </p>
          <button className="mt-6 text-white border-2 px-6 py-2 rounded-2xl hover:bg-white hover:text-[#815EEA]">
            About Us
          </button>
        </div>
      </div>

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
            >
              Login
            </button>
          </form>
          <p className="text-sm mt-5">
            Don't have an account yet? <a href="/signup" className="text-[#815EEA]">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
