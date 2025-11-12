import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const TopInstructor = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const instructors = [
    {
      name: "Dr. Sarah Ahmed",
      role: "Data Science Expert",
      img: "https://i.ibb.co.com/t6dv3Jv/34bce5332f7a6c606ee81f7018fed112.jpg",
      rating: 4.9,
    },
    {
      name: "Michael Johnson",
      role: "Full Stack Developer",
      img: "https://i.ibb.co.com/5WhRK2vb/f451092b145eb9280bb0aafd12e45c4e.jpg",
      rating: 4.8,
    },
    {
      name: "Sophia Lee",
      role: "UI/UX Design Mentor",
      img: "https://i.ibb.co.com/nNjQWBTm/cd33c7600c9f8611934cd356ebb4ebaf.jpg",
      rating: 4.95,
    },
    {
      name: "David Kim",
      role: "Digital Marketing Coach",
      img: "https://i.ibb.co.com/SXMPt2gh/c49f12c2286216edb31678a964081dc6.jpg",
      rating: 4.9,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-20 px-5 md:px-10 lg:px-20">
     <div className="container mx-auto">
       {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-[#041d16]">
        <div className="absolute inset-0 bg-[radial-linear(circle_at_center,_rgba(45,56,40,0.6)_0%,_rgba(5,45,31,0.95)_60%,_rgba(2,20,15,1)_100%)]"></div>
      </div>  

      {/* ✨ Header */}
      <div className="relative z-10 text-center mb-10 md:mb-14">
        <h3 className="text-green-400 uppercase text-xs md:text-sm tracking-wider font-semibold mb-2">
          <sup>__________</sup> Our Mentors
        </h3>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3"
        >
          Meet Our <span className="text-green-400">Top Instructors</span>
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Learn directly from world-class educators who bring practical
          experience and passion to every lesson.
        </p>
      </div>

      {/* 👩‍🏫 Instructor Cards */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {instructors.map((instructor, i) => (
          <motion.div
            key={i}
            data-aos="zoom-in-up"
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0d3325]/70 border border-green-900/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-green-700/30 transition-all duration-300 overflow-hidden group"
          >
            {/* 🖼️ Image */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-64 overflow-hidden">
              <img
                src={instructor.img}
                alt={instructor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#041d16]/90 via-[#041d16]/50 to-transparent"></div>
            </div>

            {/* 🧠 Details */}
            <div className="p-5 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                {instructor.name}
              </h3>
              <p className="text-green-400 text-sm font-medium mb-3">
                {instructor.role}
              </p>

              {/* ⭐ Rating */}
              <div className="flex justify-center items-center gap-1 text-yellow-400 mb-4 text-sm">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${
                      index < Math.floor(instructor.rating)
                        ? "opacity-100"
                        : "opacity-40"
                    }`}
                  />
                ))}
              </div>

              <button className="btn btn-sm md:btn-md bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white transition-all duration-300">
                View Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default TopInstructor;
