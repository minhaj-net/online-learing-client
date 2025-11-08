import { useState } from "react";

const Form = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f0f0f]">
      <div
        className="relative w-[320px] h-[420px] [transform-style:preserve-3d] transition-transform duration-700"
        style={{ transform: isSignup ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Login Form */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 rounded-xl shadow-[inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)] bg-[#111] backface-hidden">
          <h2 className="text-white text-2xl font-semibold mb-2">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-[240px] h-[45px] rounded-md bg-[#212121] text-white px-3 border-2 border-[#212121] focus:scale-105 transition-transform focus:outline-none shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] placeholder:text-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[240px] h-[45px] rounded-md bg-[#212121] text-white px-3 border-2 border-[#212121] focus:scale-105 transition-transform focus:outline-none shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] placeholder:text-gray-400"
          />
          <button className="px-8 py-2 mt-2 rounded-md bg-[#212121] text-white font-semibold border-2 border-[#212121] transition-transform hover:scale-105 shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)]">
            Login
          </button>
          <p className="text-sm text-white mt-3">
            Don't have an account?{" "}
            <span
              onClick={() => setIsSignup(true)}
              className="underline font-bold cursor-pointer hover:text-gray-300"
            >
              Sign Up
            </span>
          </p>
        </div>

        {/* Signup Form */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 rounded-xl shadow-[inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)] bg-[#111] [transform:rotateY(180deg)] backface-hidden">
          <h2 className="text-white text-2xl font-semibold mb-2">Sign Up</h2>
          <input
            type="text"
            placeholder="Firstname"
            className="w-[240px] h-[45px] rounded-md bg-[#212121] text-white px-3 border-2 border-[#212121] focus:scale-105 transition-transform focus:outline-none shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] placeholder:text-gray-400"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-[240px] h-[45px] rounded-md bg-[#212121] text-white px-3 border-2 border-[#212121] focus:scale-105 transition-transform focus:outline-none shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] placeholder:text-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[240px] h-[45px] rounded-md bg-[#212121] text-white px-3 border-2 border-[#212121] focus:scale-105 transition-transform focus:outline-none shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] placeholder:text-gray-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-[240px] h-[45px] rounded-md bg-[#212121] text-white px-3 border-2 border-[#212121] focus:scale-105 transition-transform focus:outline-none shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] placeholder:text-gray-400"
          />
          <button className="px-8 py-2 mt-2 rounded-md bg-[#212121] text-white font-semibold border-2 border-[#212121] transition-transform hover:scale-105 shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)]">
            Signup
          </button>
          <p className="text-sm text-white mt-3">
            Already have an account?{" "}
            <span
              onClick={() => setIsSignup(false)}
              className="underline font-bold cursor-pointer hover:text-gray-300"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
