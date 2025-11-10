import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Outlet } from "react-router";
import Loading from "../Loading/Loading";

const AllCourses = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/all-courses")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        console.log("after reloading all course data", data);
        setData(data);
      });
  }, []);
  if(loading){
   return  <Loading></Loading>
  }
  return (
    <section className="relative overflow-hidden py-16 md:py-20 px-5 md:px-10 lg:px-20">
      {/* ✨ Header */}
      <div className="relative z-10 text-center mb-10 md:mb-14">
        <h3 className="text-green-400 uppercase text-xs md:text-sm tracking-wider font-semibold mb-2">
          <sup>__________</sup> Our All Courses
        </h3>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3"
        >
          Explore Our <span className="text-green-400">Best Courses</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Unlock your potential with our expertly designed online courses
          crafted for learners of all levels.
        </p>
      </div>

      {/* 👩‍🏫 All Courses */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((data, i) => (
          <motion.div
            key={i}
            data-aos="zoom-in-up"
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0d3325]/70 border border-green-900/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-green-700/30 transition-all duration-300 overflow-hidden group"
          >
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-64 overflow-hidden">
              <img
                src={data.image}
                alt={data.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#041d16]/90 via-[#041d16]/50 to-transparent"></div>
            </div>

            <div className="px-5 py-3 flex justify-between items-center text-sm">
              <p className="text-green-400/90 font-medium tracking-wide uppercase">
                {data.category}
              </p>
            </div>

            <div className="px-5 flex justify-between items-center text-sm border-b border-green-900/20 pb-3">
              <p className="text-gray-300 font-medium">
                ⏳ <span className="text-green-300">{data.duration}</span>
              </p>
              <p className="text-green-400 font-semibold">💲{data.price}</p>
            </div>

            <div className="p-5 text-center space-y-2">
              <h3 className="text-xl font-semibold text-white leading-tight group-hover:text-green-300 transition-colors duration-300">
                {data.title}
              </h3>

              <Link
               to={`/dashboard/all-courses/course-details/${data._id}`} className="mt-3 btn btn-sm md:btn-md bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition-all duration-300">
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Nested Route Render */}
      <Outlet />
    </section>
  );
};

export default AllCourses;
