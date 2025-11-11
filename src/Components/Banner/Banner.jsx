import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FaPlay, FaGraduationCap } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import axios from "axios";
import Loading from "../Loading/Loading";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://learn-zone-server.vercel.app/popular/")
      .then((res) => {
        setLoading(false)
        console.log("after getting popular data", res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

    if(loading){
      return <Loading></Loading>
    }

  return (
    <section className="relative text-white overflow-hidden">
      {data.length > 0 && (
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade-right"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
          speed={1200}
          pagination={{ clickable: true }}
          loop={true}
          className="h-[90vh]"
        >
          {data.map((slide) => (
            <SwiperSlide key={slide._id}>
              <div className="relative h-full w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
                {/* Smart Gradient Background Layer */}
                <div className="absolute inset-0 bg-[#041d16]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,56,40,0.7)_0%,_rgba(5,45,31,0.95)_60%,_rgba(2,20,15,1)_100%)]"></div>
                </div>

                {/* Optional Background Image (blended softly) */}
                {slide.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  ></div>
                )}

                {/* Left Section */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative max-w-xl space-y-6 z-10 text-center md:text-left"
                >
                  <h1
                    data-aos="fade-up"
                    className="text-4xl md:text-6xl font-bold leading-tight"
                  >
                    {slide.title || "Upgrade Your Skills with Online Learning"}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-lg text-gray-100"
                  >
                    {slide.category ||
                      "Explore expert-led courses to boost your skills and career."}
                  </p>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  >
                    <button className="btn btn-sm md:btn-md bg-green-500 border border-green-400 text-green-300 hover:bg-green-700 hover:text-white transition-all duration-300">
                      <FaGraduationCap /> Get Started
                    </button>
                    <button className="btn btn-outline border-green-500 text-green-500 hover:bg-white hover:text-indigo-600 flex items-center gap-2 shadow-md transition">
                      <FaPlay /> Watch Demo
                    </button>
                  </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative mt-12 md:mt-0 z-10"
                >
                  <img
                    data-aos="zoom-in"
                    src={
                      slide.image ||
                      "https://i.ibb.co/Q8R6qYB/online-learning.png"
                    }
                    alt={slide.title}
                    className="w-[280px] md:w-[420px] drop-shadow-2xl rounded-xl"
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
        >
          <path
            d="M321.39,56.39c58-10.79,113.9-30.13,172-41.7,86.37-17.32,172.3-13.13,258.72,6.25C904.58,42,979.71,79.19,1056,101.2c83.18,24.08,168,28.94,244,3V120H0V0C88,41.59,192.9,69.92,321.39,56.39Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;
