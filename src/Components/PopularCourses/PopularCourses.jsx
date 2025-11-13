import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Outlet } from "react-router";
import Loading from "../Loading/Loading";
import axios from "axios";

const AllCourses = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    axios
      .get("https://learn-zone-server.vercel.app/all-courses")
      .then((res) => {
        // Sort by price descending and take top 6
        const top6 = res.data
          .sort((a, b) => b.price - a.price)
          .slice(0, 6);
        setData(top6);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="relative overflow-hidden py-10 px-3 md:px-6 lg:px-10 mx-auto">
      {/* Background */}
      <div className="absolute inset-0 bg-[#041d16]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,56,40,0.7)_0%,_rgba(5,45,31,0.95)_60%,_rgba(2,20,15,1)_100%)]"></div>
      </div>

      <title>Learn Zone - Top 6 Expensive Courses</title>

      {/* Courses Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
        {data.length === 0 && (
          <p className="text-center text-gray-400 w-full">
            No courses available.
          </p>
        )}

        {data.map((course, i) => (
          <motion.div
            key={course._id || i}
            data-aos="zoom-in-up"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0d3325]/70 border border-green-900/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-green-700/30 transition-all duration-300 overflow-hidden flex flex-col
              w-[280px] sm:w-[280px] md:w-[300px] lg:w-[320px]"
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-56 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041d16]/90 via-[#041d16]/50 to-transparent"></div>
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
                className="mt-auto btn btn-sm md:btn-md bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white rounded-lg px-3 py-1 md:px-4 md:py-2 transition-all duration-300"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <Outlet />
    </section>
  );
};

export default AllCourses;
