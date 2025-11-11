import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Outlet } from "react-router";
import Loading from "../Loading/Loading";
import axios from "axios";

const AllCourses = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Fetch all courses
  useEffect(() => {
    axios
      .get("http://localhost:3000/all-courses")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
        setLoading(false);

        const uniqueCategories = [
          "All",
          ...new Set(res.data.map((course) => course.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter courses when category changes
  useEffect(() => {
    if (selectedCategory === "All") setFilteredData(data);
    else
      setFilteredData(
        data.filter((course) => course.category === selectedCategory)
      );
  }, [selectedCategory, data]);

  if (loading) return <Loading />;

  return (
    <section className="relative overflow-hidden py-10 px-3 md:px-6 lg:px-10 flex flex-col lg:flex-row gap-6">
      {/* Left Sidebar - Categories */}
      <aside className="w-full lg:w-1/4 bg-[#0d3325]/70 backdrop-blur-md rounded-2xl p-4 md:p-5 text-white mb-5 lg:mb-0">
        <h3 className="text-md md:text-lg font-semibold mb-3 md:mb-4">
          Filter by Category
        </h3>
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-green-500/20 transition-colors duration-200 ${
                selectedCategory === cat ? "bg-green-500/30 font-semibold" : ""
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Courses Grid */}
      <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full lg:w-3/4">
        {filteredData.map((course, i) => (
          <motion.div
            key={i}
            data-aos="zoom-in-up"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0d3325]/70 border border-green-900/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-green-700/30 transition-all duration-300 overflow-hidden flex flex-col h-full max-h-[450px]"
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-56 overflow-hidden">
              <img
                src={course.image}
                alt={course.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                className="mt-auto btn btn-sm md:btn-md bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white rounded-lg px-3 py-1 md:px-4 md:py-2 transition-all duration-300"
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
