import React, { useEffect } from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "aos/dist/aos.css";
import AOS from "aos";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const featuredCourses = [
    {
      title: "Full-Stack Web Development",
      image: "https://example.com/images/fullstack-web.jpg",
    },
    {
      title: "Python for Data Science",
      image: "https://example.com/images/python-data-science.jpg",
    },
    {
      title: "ReactJS Frontend Development",
      image: "https://example.com/images/reactjs.jpg",
    },
  ];

  return (
    <section className="relative bg-linear-to-r from-[#f88d0b] to-[#eec153] text-white overflow-hidden">
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1
            data-aos="fade-right"
            className="text-4xl md:text-6xl font-bold"
          >
            Learn Programming <br /> From Experts
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-lg md:text-xl"
          >
            Explore, enroll, and master programming courses designed for real-world skills.
          </p>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="flex space-x-4"
          >
            <button className="user-profile">
              <div className="user-profile-inner">
                <FaUser />
                <span>Get Started</span>
              </div>
            </button>
            <button className="btn mt-1 btn-outline flex items-center gap-2">
              Explore Courses <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0" data-aos="fade-left">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {featuredCourses.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-black bg-opacity-50 text-white absolute bottom-0 w-full">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
