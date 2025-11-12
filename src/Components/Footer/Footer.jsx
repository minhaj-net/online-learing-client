import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden  text-gray-300">
      <div className="container mx-auto">
        {/* 🌌 Background matching ChoseUs */}
        <div className="absolute inset-0 bg-[#041d16]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,56,40,0.5)_0%,_rgba(5,45,31,0.95)_60%,_rgba(2,20,15,1)_100%)]"></div>
        </div>

        {/* 💡 Content */}
        <div className="relative z-10 px-6 lg:px-20 py-16">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand / About */}
            <div>
              <div className="flex gap-4 mb-2 items-center">
                <Link to={"/"}>
                  <img
                    src="https://i.ibb.co.com/GQWy02Kk/5de63102937d14a8350c852d3bf689be.jpg"
                    alt="Logo"
                    className="w-12 h-12 rounded-full"
                  />
                </Link>
                <h2 className="text-2xl font-bold text-green-400 mb-3">
                  LearnZone
                </h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                LearnZone empowers learners worldwide with expert-led courses,
                interactive lessons, and flexible online education for everyone.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-green-400 font-semibold mb-3 text-lg">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#courses"
                    className="hover:text-green-300 transition"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-green-300 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-green-300 transition"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-green-300 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Social / Newsletter */}
            <div>
              <h3 className="text-green-400 font-semibold mb-3 text-lg">
                Stay Connected
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Follow us on social media and stay updated with new courses.
              </p>

              <div className="flex space-x-4">
                {[
                  { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
                  { icon: <FaXTwitter />, link: "https://x.com/" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
                  { icon: <FaInstagram />, link: "https://www.instagram.com/" },
                ].map((item, i) => (
                  <a
                    target="_blank"
                    key={i}
                    href={item.link}
                    className="text-gray-300 hover:text-green-400 text-lg transition transform hover:scale-110"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-green-900/40 my-10"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-green-400 font-semibold">LearnZone</span>. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
