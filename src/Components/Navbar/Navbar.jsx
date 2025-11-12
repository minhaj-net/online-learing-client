import React, { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import ToogleButton from "../ToggleButton/ToggleButton";

const Navbar = () => {
  const { user } = use(AuthContext);

  // const handleSignOut = () => {
 
  //   logOut()
  //     .then((result) => {
  //       toast.success("Logout successful");
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       toast.error("Log out Failed")
  //       console.log(err);
  //     });
  // };

    
  const navigate = useNavigate();
  const handleSignOut = () => {

  signOut(auth)
    .then(() => {
      toast.success("Logout successful");
      navigate("/login"); // লগআউটের পর রিডাইরেক্ট করবে
    })
    .catch((error) => {
      console.error("Logout error:", error);
      toast.error("Logout failed. Please try again.");
    });
};

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#0d3325] font-bold border-b-3 border-[#0d3325]"
            : "hover:text-[#0d3325]"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive
            ? "text-[#0d3325] font-bold border-b-3 border-[#0d3325]"
            : "hover:text-[#0d3325]"
        }
      >
        Courses
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-[#0d3325] font-bold border-b-3 border-[#0d3325]"
            : "hover:text-[#0d3325]"
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <nav className=" shadow-md justify-center items-center">
      <div className="container mx-auto flex items-center py-3 px-6">
        {/* Left Side - Logo */}
        <div className="flex items-center flex-1">
          <img
            src="https://i.ibb.co.com/GQWy02Kk/5de63102937d14a8350c852d3bf689be.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <Link to="/" className="text-xl font-bold text-gray-800 ml-2">
            Learn <sup className="text-[#0d3325]">Zone</sup>
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 text-gray-700 font-medium">
          {links}
        </div>

        {/* Right Side - Profile Button */}
        <div className="hidden md:flex flex-1 justify-end">
          <ToogleButton></ToogleButton>
          {user ? (
            <Link
              onClick={handleSignOut}
             
              className="btn btn-sm md:btn-md bg-green-700 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <FaSignOutAlt className="rotate-180" />
              <span>Logout</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm md:btn-md bg-green-700 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <FaUser />
              <span>Login</span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col items-center space-y-4 py-4">
            {links}
            <Link
              to={"/login"}
              className="btn btn-sm md:btn-md bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <FaUser />
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
