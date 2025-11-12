import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularCourses = () => {
  const [data, setData] = useState([]);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out" });
  }, []);

  // ✅ Fetch data
  useEffect(() => {
    axios
      .get("https://learn-zone-server.vercel.app/popular/")
      .then((res) => {
        console.log("after getting popular data", res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#2d3828] to-[#052d1f] py-20 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-green-400 uppercase text-sm tracking-wider font-semibold">
            <sup>__________</sup> Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Popular Courses
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover courses that can boost your career. Learn from expert
            instructors and practical lessons. Join thousands of learners who
            are advancing their skills every day.
          </p>
        </motion.div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((feature, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gradient-to-b from-[#1b1c1f] to-[#101113] p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.div
                className="mb-4 overflow-hidden rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
