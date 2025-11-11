import React, { useEffect , useContext } from "react";
import { useParams,  useLoaderData, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaClock,
  FaDollarSign,
  FaFileAlt,
  FaImage,
  FaStar,
  FaTag,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const UpdateCourse = () => {
  const { id } = useParams(); 
  console.log(id);
    const course = useLoaderData();
    console.log(course);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  

  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  
  //  Handle Update Submit
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const duration = form.duration.value;
    const category = form.category.value;
    const isFeatured = form.isFeatured.checked;
    const description = form.description.value;

    const newCourse = {
      title,
      image,
      price,
      duration,
      category,
      description,
      isFeatured,
      email: user?.email,
    };

    

   axios
  .put(`https://learn-zone-server.vercel.app/courses/${id}`, newCourse)
  .then(() => {
    toast.success("✅ Course updated successfully!");
    navigate("/dashboard/my-course");
  })
  .catch(() => {
    toast.error("❌ Update failed! Try again.");
  });

  };

  return (
    <div className="min-h-screen bg-[#0d3325] flex justify-center items-start py-10 px-5">
      <motion.form
        onSubmit={handleUpdate}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-[#041d16]/80 border border-green-900 rounded-2xl p-8 shadow-lg"
        data-aos="fade-up"
      >
        <title>Learn Zone - Update Courses</title>
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
          Update Course
        </h2>

        {/* Title */}
        <div className="form-control mb-4">
          <label className="label flex items-center gap-2">
            <FaFileAlt className="text-green-400" /> Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={course.title}
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
            defaultValue={course.image}
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
              defaultValue={course.price}
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
              defaultValue={course.duration}
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
            defaultValue={course.category}
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
            defaultValue={course.description}
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
            defaultChecked={course.isFeatured}
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
          Update
        </button>
      </motion.form>
    </div>
  );
};

export default UpdateCourse;
