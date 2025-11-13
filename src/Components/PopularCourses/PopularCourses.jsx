import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Outlet } from "react-router";
import axios from "axios";

const AllCourses = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Fetch all courses
  useEffect(() => {
    axios
      .get("https://learn-zone-server.vercel.app/all-courses")
      .then((res) => {
        // Sort by price descending and take top 6
        const sortedData = res.data
          .sort((a, b) => b.price - a.price)
          .slice(0, 6);
        setData(sortedData);
        setFilteredData(sortedData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="mx-auto relative py-10 px-3 sm:px-6 md:px-10 lg:px-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#041d16]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,56,40,0.7)_0%,_rgba(5,45,31,0.95)_60%,_rgba(2,20,15,1)_100%)]"></div>
      </div>

      <title>Learn Zone - All Courses</title>
      {/* ✨ Header */}
      <div className="relative z-10 text-center mb-10 md:mb-14">
        <h3 className="text-green-400 uppercase text-xs md:text-sm tracking-wider font-semibold mb-2">
          <sup>__________</sup>EXPENSIVE
        </h3>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3"
        >
           Our Popular <span className="text-green-400"> Courses</span>
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Upgrade your knowledge with our popular courses. Learn from the best
          and level up your career
        </p>
      </div>

      {/* Courses Grid */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {filteredData.map((course) => (
          <motion.div
            key={course._id}
            data-aos="zoom-in-up"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0d3325]/70 border border-green-900/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-green-700/30 transition-all duration-300 overflow-hidden flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-56 overflow-hidden">
              <img
                src={course.image}
                alt={course.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#041d16]/90 via-[#041d16]/50 to-transparent"></div>
            </div>

            {/* Category */}
            <div className="px-4 py-2 flex justify-between items-center text-xs sm:text-sm">
              <p className="text-green-400/90 font-medium tracking-wide uppercase">
                {course.category}
              </p>
            </div>

            {/* Duration & Price */}
            <div className="px-4 flex justify-between items-center text-xs sm:text-sm border-b border-green-900/20 pb-2">
              <p className="text-gray-300 font-medium">
                ⏳ <span className="text-green-300">{course.duration}</span>
              </p>
              <p className="text-green-400 font-semibold">💲{course.price}</p>
            </div>

            {/* Title + Button */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight group-hover:text-green-300 transition-colors duration-300 mb-3 line-clamp-2 overflow-hidden">
                {course.title}
              </h3>
              <Link
                to={`/dashboard/all-courses/course-details/${course._id}`}
                className="mt-auto btn btn-sm md:btn-md bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white rounded-lg px-3 py-1 md:px-4 md:py-2 transition-all duration-300 text-center"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Nested Route */}
      <Outlet />
    </section>
  );
};

export default AllCourses;
