import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaImage,
  FaTag,
  FaDollarSign,
  FaClock,
  FaFileAlt,
  FaStar,
} from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const AddCourse = () => {
  const {user}=use(AuthContext)
  console.log(user?.email);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("After submitted new course");

    const title = e.target.title.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const duration = e.target.duration.value;
    const category = e.target.category.value;
    const isFeatured = e.target.isFeatured.value;
    const description=e.target.description.value;
    const newCourse={
        title:title,
        image:image,
        price:price,
        duration:duration,
        description:description,
        category:category,
        isFeatured:isFeatured,
        email:user?.email
        

    }
    console.log(newCourse);


    fetch("http://localhost:3000/all-courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    })
      .then((res) => {
        console.log(res);
        toast.success("Add New Course Successfully")
        e.target.reset()
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-[#0d3325] flex justify-center items-start py-10 px-5">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-[#041d16]/80 border border-green-900 rounded-2xl p-8 shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
          Add New Course
        </h2>

        {/* Title */}
        <div className="form-control mb-4">
          <label className="label flex items-center gap-2">
            <FaFileAlt className="text-green-400" /> Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter course title"
            className="input input-bordered w-full text-white bg-[#0d3325] border-green-600 placeholder-gray-400"
            required
          />
        </div>

        {/* Image URL */}
        <div className="form-control mb-4">
          <label className="label flex items-center gap-2">
            <FaImage className="text-green-400" /> Image URL
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            className="input input-bordered w-full text-white bg-[#0d3325] border-green-600 placeholder-gray-400"
            required
          />
        </div>

        {/* Price & Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label flex items-center gap-2">
              <FaDollarSign className="text-green-400" /> Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="input input-bordered w-full text-white bg-[#0d3325] border-green-600 placeholder-gray-400"
              required
            />
          </div>

          <div className="form-control">
            <label className="label flex items-center gap-2">
              <FaClock className="text-green-400" /> Duration
            </label>
            <input
              type="text"
              name="duration"
              placeholder="Enter duration (e.g., 12 weeks)"
              className="input input-bordered w-full text-white bg-[#0d3325] border-green-600 placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="form-control mb-4">
          <label className="label flex items-center gap-2">
            <FaTag className="text-green-400" /> Category
          </label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            className="input input-bordered w-full text-white bg-[#0d3325] border-green-600 placeholder-gray-400"
            required
          />
        </div>

        {/* Description */}
        <div className="form-control mb-4">
          <label className="label flex items-center gap-2">
            <FaFileAlt className="text-green-400" /> Description
          </label>
          <textarea
            name="description"
            placeholder="Enter course description"
            className="textarea textarea-bordered w-full text-white bg-[#0d3325] border-green-600 placeholder-gray-400"
            rows={4}
            required
          />
        </div>

        {/* Is Featured */}
        <div className="form-control mb-6 flex items-center gap-2">
          <input
          
            type="checkbox"
            name="isFeatured"
            className="checkbox checkbox-success"
          />
          <label className="text-white flex items-center gap-2">
            <FaStar className="text-yellow-400" /> Featured
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn w-full bg-green-500 hover:bg-green-600 text-white border-none transition-all duration-300"
        >
          Add Course
        </button>
      </motion.form>
    </div>
  );
};

export default AddCourse;
