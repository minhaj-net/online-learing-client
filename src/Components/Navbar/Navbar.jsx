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
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Left Side - Logo and Name */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co.com/GQWy02Kk/5de63102937d14a8350c852d3bf689be.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <Link to="/" className="text-xl font-bold text-gray-800">
            Online <sup className="text-[#f88d0b]">Learner</sup>
          </Link>
        </div>

        {/* Center - Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {links}
        </div>

        {/* Right Side - Dummy Button */}
        <div className="hidden md:block">
          <button className="user-profile">
            <div className="user-profile-inner">
              <FaUser />
              <span>Profile</span>
            </div>
          </button>
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
            <button class="user-profile">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
