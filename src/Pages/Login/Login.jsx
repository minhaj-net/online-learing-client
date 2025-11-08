import { useState } from "react";
import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const Form = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
  <div>
    <Navbar></Navbar>
      <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-[#1b2a1f]">
      {/* 🌈 Light Why Choose Us Style Gradient Background */}
      <div className="absolute inset-0">
        {/* Top-left soft glow */}
        <div className="absolute top-[-60px] left-[-60px] w-[220px] h-[220px] bg-gradient-to-br from-green-300/30 via-transparent to-transparent rounded-full blur-2xl"></div>

        {/* Bottom-right subtle glow */}
        <div className="absolute bottom-[-60px] right-[-60px] w-[220px] h-[220px] bg-linear-to-tl from-green-400/30 via-transparent to-transparent rounded-full blur-2xl"></div>

        {/* Center radial subtle highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,56,40,0.2)_0%,_rgba(5,45,31,0.5)_60%,_rgba(2,20,15,0.8)_100%)]"></div>
      </div>

      {/* 🔄 Form Container */}
      <div
        className="relative w-[320px] h-[420px] [transform-style:preserve-3d] transition-transform duration-700"
        style={{ transform: isSignup ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* 🟩 Login Form */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 rounded-xl shadow-[inset_2px_2px_8px_rgba(0,0,0,0.3),inset_-1px_-1px_5px_rgba(255,255,255,0.2)] bg-[#2a3a2b] backface-hidden">
          <h2 className="text-white text-2xl font-semibold mb-2">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-[240px] h-[45px] rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[240px] h-[45px] rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
          />
          <button
          type="submit"
          className="mt-2 m-4 w-full py-3 rounded-md bg-green-400/20 text-white font-semibold border-2 border-green-400 transition-transform scale-90 hover:scale-95 hover:bg-green-400/40 shadow-[2px_2px_4px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)]"
        >
         Login
        </button>
          <p className="text-sm text-white mt-3">
            Don't have an account?{" "}
            <Link
              to={"/registration"}
              onClick={() => setIsSignup(true)}
              className="underline font-bold cursor-pointer hover:text-green-300"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Form;
