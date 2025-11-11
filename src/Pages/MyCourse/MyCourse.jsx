import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import CourseCard from "../../Components/MyCourseCard/MyCourseCard";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";
import Loading from "../../Components/Loading/Loading";
import axios from "axios";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (user) {
    axios
      .get(`http://localhost:3000/courses?email=${user?.email}`)
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  } else {
    setLoading(false);
  }
}, [user]);
  const handleDelete = (id) => {
    // const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    // if (!confirmDelete) return;

    axios
      .delete(`http://localhost:3000/courses/${id}`)
      .then((res) => {
        if (res.data.message === "Course deleted successfully") {
          setCourses(courses.filter((c) => c._id !== id));
          toast.success("✅ Course deleted successfully!");
        } else {
          toast.error("❌ Course not found!");
        }
      })
      .catch(() => toast.error("❌ Failed to delete course"));
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="min-h-screen  text-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Label */}
        <h3 className="text-green-400 uppercase text-sm tracking-wider font-semibold mb-2">
          <sup>__________</sup>My Course
        </h3>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
        >
          Start Learning <span className="text-green-400">New Skills</span>
        </motion.h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10">
          Here you can view, update, or manage all the courses you’ve created or
          enrolled in. Keep track of your learning journey and make changes
          whenever you need.
        </p>

        {/* Loading State */}
        {loading && (
          <div className="text-gray-400 text-lg animate-pulse text-center">
            Loading your courses...
          </div>
        )}

        {/* Empty State */}
        {!loading && courses.length === 0 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-gray-400 text-lg"
          >
            You haven’t added any courses yet!
          </motion.p>
        )}

        {/* Courses Grid */}
        {!loading && courses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                handleDelete={handleDelete}
                course={course}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
