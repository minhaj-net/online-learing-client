import React, { useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const CourseDetails = () => {
  const { user } = useContext(AuthContext);
  const detailsCourse = useLoaderData();
  const { _id, category, description, duration, image, price, title } =
    detailsCourse;

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://learn-zone-server.vercel.app/my-enroll?email=${user.email}`
        )
        .then((res) => setEnrolledCourses(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const highlights = [
    "Expert Instructors",
    "Certified Courses",
    "Flexible Learning",
    "Global Community",
  ];

  const handleEnroll = async (course) => {
    if (!user?.email) {
      toast.warning("⚠️ Please login to enroll!");
      return;
    }

    // 🔹 Check if already enrolled
    const alreadyEnrolled = enrolledCourses.some(
      (c) => c.courseId === course._id
    );
    if (alreadyEnrolled) {
      toast.info("ℹ️ You have already enrolled in this course!");
      return;
    }

    const enrollData = {
      userEmail: user.email,
      courseId: course._id,
      category,
      description,
      title,
      image,
      price,
      duration,
      enrolledAt: new Date(),
    };

    try {
      await axios.post(
        "https://learn-zone-server.vercel.app/my-enroll",
        enrollData
      );
      toast.success("✅ Enrolled successfully!");
      setEnrolledCourses((prev) => [...prev, enrollData]); // update local state
    } catch (error) {
      console.error(error);
      toast.error("❌ Enrollment failed!");
    }
  };

  return (
    <section className="min-h-screen bg-[#041d16] text-white py-16 px-5 md:px-10 lg:px-20">
      {/* Course Banner */}
      <motion.div
        data-aos="fade-up"
        className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-12"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[350px] object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#041d16]/95 via-[#041d16]/50 to-transparent"></div>

        <div className="absolute bottom-5 left-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-300 mb-2">
            {title}
          </h1>
        </div>
      </motion.div>

      {/* Course Info */}
      <div className="grid lg:grid-cols-3 gap-10 mb-16">
        {/* Left: Overview */}
        <motion.div
          data-aos="fade-right"
          className="lg:col-span-2 bg-[#0d3325]/70 p-6 rounded-2xl border border-green-900/40 shadow-lg backdrop-blur-md"
        >
          <h2 className="text-2xl font-semibold mb-3 text-green-300">
            Course Overview
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

          <h3 className="text-xl font-semibold text-green-400 mb-4">
            Why Choose Us:
          </h3>
          <ul className="space-y-3">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center text-gray-300 gap-2">
                <FaCheckCircle className="text-green-400" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Sidebar */}
        <motion.div
          data-aos="fade-left"
          className="bg-[#0d3325]/70 p-6 rounded-2xl border border-green-900/40 shadow-lg text-gray-200 space-y-4 backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            <span className="text-green-400 font-semibold">Category:</span>
            <p>{category}</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-green-400 font-semibold">Duration:</span>
            <p className="flex items-center gap-2">
              <FaClock className="text-green-300" />
              {duration}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-green-900/30 pt-4">
            <span className="text-green-400 font-semibold">Price:</span>
            <p className="text-green-300 font-bold text-lg">$ {price}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleEnroll(detailsCourse)}
            className="btn w-full mt-4 bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white rounded-lg transition-all duration-300"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetails;
