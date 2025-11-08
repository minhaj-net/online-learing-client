import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChalkboardTeacher, FaCertificate, FaClock, FaUsers } from "react-icons/fa";

const ChoseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <FaChalkboardTeacher className="text-4xl text-green-400" />,
      title: "Expert Instructors",
      desc: "Learn from industry-leading professionals with years of real-world experience.",
    },
    {
      icon: <FaCertificate className="text-4xl text-green-400" />,
      title: "Certified Courses",
      desc: "Earn valuable certificates to showcase your skills and boost your career.",
    },
    {
      icon: <FaClock className="text-4xl text-green-400" />,
      title: "Flexible Learning",
      desc: "Study anytime, anywhere — your courses are available 24/7 at your own pace.",
    },
    {
      icon: <FaUsers className="text-4xl text-green-400" />,
      title: "Global Community",
      desc: "Connect, collaborate, and grow with learners and mentors from around the world.",
    },
  ];

  return (
    <div className="relative overflow-hidden py-20 px-6 lg:px-20">
      {/* 🌌 Background with Extra Outer Dark Tone */}
      <div className="absolute inset-0 bg-[#041d16]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,56,40,0.7)_0%,_rgba(5,45,31,0.95)_60%,_rgba(2,20,15,1)_100%)]"></div>
      </div>

      {/* ✨ Content */}
      <div className="relative z-10 text-center mb-12">
        <h3 className="text-green-400  uppercase text-sm tracking-wider font-semibold mb-2">
           <sup>__________</sup> Advantage
        </h3>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-3"
        >
          Why Chose <span className="text-green-400">With Us</span>
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Empower your learning journey with high-quality courses, expert guidance, and an engaging online experience.
        </p>
      </div>

      {/* 🔹 Feature Cards */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="card bg-[#0c3b2b]/50 backdrop-blur-md border border-green-900/30 shadow-lg hover:shadow-green-600/20 transition-all duration-300"
          >
            <div className="card-body items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-white">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChoseUs;
