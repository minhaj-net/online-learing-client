import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#f88d0b] font-semibold" : "hover:text-[#f88d0b]"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive ? "text-[#f88d0b] font-semibold" : "hover:text-[#f88d0b]"
        }
      >
        Courses
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-[#f88d0b] font-semibold" : "hover:text-[#f88d0b]"
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center py-3 px-6">
        {/* Left Side - Logo */}
        <div className="flex items-center flex-1">
          <img
            src="https://i.ibb.co.com/GQWy02Kk/5de63102937d14a8350c852d3bf689be.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <Link to="/" className="text-xl font-bold text-gray-800 ml-2">
            Online <sup className="text-[#f88d0b]">Learner</sup>
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 text-gray-700 font-medium">
          {links}
        </div>

        {/* Right Side - Profile Button */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            to="/login"
          className="user-profile flex items-center space-x-2 text-gray-700 hover:text-[#f88d0b]">
            <FaUser />
            <span>Login</span>
          </Link>
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
            className=" flex items-center space-x-2 text-gray-700 hover:text-[#f88d0b]">
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
