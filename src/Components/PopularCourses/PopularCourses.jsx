import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularCourses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/popular/")
      .then((res) => {
        console.log("after getting popular data", res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-linear-to-b from-[#2d3828] to-[#052d1f] py-20 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((feature, index) => (
            <div
              key={index}
              className="bg-linear-to-b from-[#1b1c1f] to-[#101113] p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
