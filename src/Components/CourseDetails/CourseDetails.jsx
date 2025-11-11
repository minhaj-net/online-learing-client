import React, { use, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserGraduate, FaClock, FaStar, FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const CourseDetails = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  console.log(data.category);

  const { category, description, duration, image, price, title } = data;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Dummy course data (you can replace this with your dynamic  data)
  const course = {
    highlights: [
      "Expert Instructors",
      "Certified Courses",
      "Flexible Learning",
      "Global Community",
    ],
  };
  const handleEnroll = (course) => {
    toast.success("🎉 Enrolled Successfully!");
    if (!user?.email) {
      return alert("Please login to enroll!");
    }

    const enrollData = {
      userEmail: user.email, // logged-in user email
      courseId: course._id,
      category: category,
      description: description,
      title: title,
      image: image,
      price: price,
      duration: duration,
      enrolledAt: new Date(), // date of enrollment
    };

    axios
      .post("http://localhost:3000/my-enroll", enrollData)
      .then(() => {
        toast.success("✅ Enrolled successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("❌ Enrollment failed!");
      });
  };

  // const relatedCourses = [
  //   {
  //     id: 1,
  //     title: "UI/UX Design Fundamentals",
  //     img: "https://images.unsplash.com/photo-1559027615-5da6c3947810?w=600",
  //   },
  //   {
  //     id: 2,
  //     title: "Advanced JavaScript Mastery",
  //     img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
  //   },
  //   {
  //     id: 3,
  //     title: "React for Beginners",
  //     img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
  //   },
  // ];

  return (
    <section className="min-h-screen bg-[#041d16] text-white py-16 px-5 md:px-10 lg:px-20">
      {/* 🔹 Course Banner */}

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

      {/* 🔸 Course Info */}
      <div className="grid lg:grid-cols-3 gap-10 mb-16">
        <motion.div
          data-aos="fade-right"
          className="lg:col-span-2 bg-[#0d3325]/70 p-6 rounded-2xl border border-green-900/40 shadow-lg backdrop-blur-md"
        >
          <h2 className="text-2xl font-semibold mb-3 text-green-300">
            Course Overview
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {description}
            {description}
            {description}
          </p>

          <h3 className="text-xl font-semibold text-green-400 mb-4">
            Why Chose With Us:
          </h3>
          <ul className="space-y-3">
            {course.highlights.map((item, index) => (
              <li key={index} className="flex items-center text-gray-300 gap-2">
                <FaCheckCircle className="text-green-400" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 🔹 Sidebar */}
        <motion.div
          data-aos="fade-left"
          className="bg-[#0d3325]/70 p-6 rounded-2xl border border-green-900/40 shadow-lg text-gray-200 space-y-4 backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            <span className="text-green-400 font-semibold">Category:</span>
            <p className="flex items-center gap-2">{category}</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-green-400 font-semibold">Duration:</span>
            <p className="flex items-center gap-2">
              <FaClock className="text-green-300" />
              {duration}
            </p>
          </div>

          {/* <div className="flex items-center justify-between">
            <span className="text-green-400 font-semibold">Rating:</span>
            <p className="flex items-center gap-1 text-yellow-400">
             {isFeatured}
            </p>
          </div> */}

          <div className="flex items-center justify-between border-t border-green-900/30 pt-4">
            <span className="text-green-400 font-semibold">Price:</span>
            <p className="text-green-300 font-bold text-lg">$ {price}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleEnroll}
            className="btn w-full mt-4 bg-green-500/10 border border-green-400 text-green-300 hover:bg-green-500 hover:text-white rounded-lg transition-all duration-300"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>

      {/* 🌀 Related Courses Section */}
      {/* <motion.div data-aos="fade-up">
        <h2 className="text-2xl font-bold text-green-300 mb-6">
          Related Courses
        </h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {relatedCourses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-[#0d3325]/70 rounded-xl overflow-hidden shadow-md border border-green-900/40 hover:shadow-green-700/30 transition-all duration-300">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-green-300 font-semibold">
                    {course.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div> */}
    </section>
  );
};

export default CourseDetails;
