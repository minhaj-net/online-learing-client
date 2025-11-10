import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

const CourseCard = ({ course, handleDelete }) => {
  const { category, duration, image, price, title, _id } = course;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.div
      data-aos="zoom-in-up"
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0d3325]/70 border border-green-900/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-green-700/30 transition-all duration-300 overflow-hidden group"
    >
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-64 overflow-hidden">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#041d16]/90 via-[#041d16]/50 to-transparent"></div>
      </div>

      <div className="px-5 py-3 flex justify-between items-center text-sm">
        <p className="text-green-400/90 font-medium tracking-wide uppercase">
          {category}
        </p>
      </div>

      <div className="px-5 flex justify-between items-center text-sm border-b border-green-900/20 pb-3">
        <p className="text-gray-300 font-medium">
          ⏳ <span className="text-green-300">{duration}</span>
        </p>
        <p className="text-green-400 font-semibold">💲{price}</p>
      </div>

      <div className="p-5 text-center space-y-2">
        <h3 className="text-xl h-16 font-semibold text-white leading-tight group-hover:text-green-300 transition-colors duration-300">
          {title}
        </h3>

        <div className="flex  justify-between items-center">
          <Link
            to={`/dashboard/update-course/${_id}`}
            className="mt-3 btn btn-sm md:btn-md bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition-all duration-300"
          >
            Update
          </Link>
          <Link 
            onClick={()=>handleDelete(_id)}
          className="mt-3 btn btn-sm md:btn-md bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition-all duration-300">
            Delete
          </Link>
        </div>
        <Link
          to={`/dashboard/all-courses/course-details/${_id}`}
          className="mt-3 btn    w-full btn-sm md:btn-md bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;
