import React, { useEffect, useState, useContext } from "react";
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
import axios from "axios";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Fetch unique categories from backend
    axios
      .get("https://learn-zone-server.vercel.app/all-courses")
      .then((res) => {
        const uniqueCategories = [
          ...new Set(res.data.map((course) => course.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const duration = e.target.duration.value;
    const category = e.target.category.value;
    const isFeatured = e.target.isFeatured.checked;
    const description = e.target.description.value;

    const newCourse = {
      title,
      image,
      price,
      duration,
      description,
      category,
      isFeatured,
      email: user?.email,
      userName: user?.displayName,
      photo: user?.photoURL,
    };
    if(!user){
      e.target.reset()
      toast.error("At frist Register your acount")
      return
    }

    axios
      .post("https://learn-zone-server.vercel.app/all-courses", newCourse)
      .then(() => {
        toast.success("✅ Add New Course Successfully");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("❌ Failed to add course");
      });
  };

  return (
    <div className="min-h-screen bg-[#0d3325] flex justify-center items-start py-8 px-3 sm:px-6 md:px-10">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-[#041d16]/80 border border-green-900 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg"
        data-aos="fade-up"
      >
        <title>Learn Zone - Add Courses</title>
        <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6 text-center">
          Add New Course
        </h2>

        {/* User Details */}
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
         <div className="form-control mb-4">
          <label className="label flex items-center gap-2">
            <FaFileAlt className="text-green-400" /> User Name
          </label>
          <input
            type="text"
            name="userName"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full text-white bg-[#0d3325] border-green-600 placeholder-gray-400"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label flex items-center gap-2">
            <FaFileAlt className="text-green-400" /> Email
          </label>
          <input
            type="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full text-white bg-[#0d3325] border-green-600 placeholder-gray-400"
          />
        </div>
       </div>

        <div className="form-control mb-4">
          <label className="label flex items-center gap-2">
            <FaImage className="text-green-400" /> User Photo URL
          </label>
          <input
            type="text"
            name="photo"
            value={user?.photoURL || ""}
            readOnly
            className="input input-bordered w-full text-white bg-[#0d3325] border-green-600 placeholder-gray-400"
          />
        </div>

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
            <FaImage className="text-green-400" /> Course Image URL
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

        {/* Category Dropdown */}
        <div className="form-control mb-4">
          <label className="label flex items-center gap-2">
            <FaTag className="text-green-400" /> Category
          </label>
          <select
            name="category"
            className="select select-bordered w-full text-white bg-[#0d3325] border-green-600"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
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

        {/* Featured Checkbox */}
        <div className="form-control mb-6 flex items-center gap-2">
          <input
            type="checkbox"
            name="isFeatured"
            className="checkbox checkbox-success"
            required
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
