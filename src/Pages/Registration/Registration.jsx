import { useState } from "react";
import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register data:", formData);
    // Add your registration logic here
  };

  return (
   <div>
    <Navbar></Navbar>
     <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-[#1b2a1f]">
      {/* 🌈 Why Choose Us Style Gradient Background */}
      <div className="absolute inset-0">
        {/* Top-left soft glow */}
        <div className="absolute top-[-60px] left-[-60px] w-[220px] h-[220px] bg-gradient-to-br from-green-300/30 via-transparent to-transparent rounded-full blur-2xl"></div>
        {/* Bottom-right subtle glow */}
        <div className="absolute bottom-[-60px] right-[-60px] w-[220px] h-[220px] bg-gradient-to-tl from-green-400/30 via-transparent to-transparent rounded-full blur-2xl"></div>
        {/* Center radial subtle highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,56,40,0.2)_0%,_rgba(5,45,31,0.5)_60%,_rgba(2,20,15,0.8)_100%)]"></div>
      </div>

      {/* 🟢 Registration Form */}
      <form
        onSubmit={handleRegister}
        className="relative w-[360px] p-6 rounded-xl bg-[#2a3a2b] shadow-[4px_4px_12px_rgba(0,0,0,0.3),1px_1px_8px_rgba(255,255,255,0.2)] flex flex-col gap-4"
      >
        <h2 className="text-white text-2xl font-semibold text-center mb-4">
          Register
        </h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full h-12 rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full h-12 rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
        />

        <input
          type="text"
          name="photoURL"
          value={formData.photoURL}
          onChange={handleChange}
          placeholder="Photo URL"
          className="w-full h-12 rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full h-12 rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
        />

        <button
          type="submit"
          className="mt-2 w-full py-3 rounded-md bg-green-400/20 text-white font-semibold border-2 border-green-400 transition-transform hover:scale-105 hover:bg-green-400/40 shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)]"
        >
          Register
        </button>
        <p className="text-sm text-white text-center mt-3">
          Already have an account?{" "}
          <Link
          to={"/login"}
          className="underline font-bold cursor-pointer hover:text-green-300">
            Sign In
          </Link>
        </p>
      </form>
    </div>
   </div>
  );
};

export default Registration;
