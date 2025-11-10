import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        toast.success("Logout successful");
        console.log(result.user);
      })
      .catch((err) => {
        toast.error("Logout failed ❌. Please try again.");
        console.log(err.message);
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
            Online <sup className="text-[#0d3325]">Learner</sup>
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 text-gray-700 font-medium">
          {links}
        </div>

        {/* Right Side - Profile Button */}
        <div className="hidden md:flex flex-1 justify-end">
          {user ? (
            <Link
              onClick={handleSignOut}
              to="/login"
              className="bg-[#0d3325] flex justify-center items-center px-4 py-2 text-white border border-green-900/30 backdrop-blur-md rounded-xl gap-2 shadow-lg hover:shadow-green-700/30 transition-all duration-300 overflow-hidden group"
            >
              <FaSignOutAlt className="rotate-180" />
              <span>Logout</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-[#0d3325] flex justify-center items-center px-4 py-2 text-white border border-green-900/30 backdrop-blur-md rounded-xl gap-2 shadow-lg hover:shadow-green-700/30 transition-all duration-300 overflow-hidden group"
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
              className="bg-[#0d3325] flex justify-center items-center px-4 py-2 text-white border border-green-900/30 backdrop-blur-md rounded-xl gap-2 shadow-lg hover:shadow-green-700/30 transition-all duration-300 overflow-hidden group"
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
