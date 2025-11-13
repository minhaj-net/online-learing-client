import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";
import Loading from "../../Components/Loading/Loading";
import axios from "axios";

const MyEnrolledCourses = () => {
  const { user } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axios
        .get(
          `https://learn-zone-server.vercel.app/my-enroll?email=${user.email}`
        )
        .then((res) => {
          setEnrolledCourses(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  // ⏳ Loading Spinner
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#0d3325] py-10 px-5">
      <h3 className="text-green-400 text-center uppercase text-xs md:text-sm tracking-wider font-semibold mb-2">
        <sup>__________</sup> Enrollment
      </h3>
      <h2 className="text-3xl text-green-400 font-bold mb-8 text-center">
        My Enrolled Courses
      </h2>
      <title>Learn Zone - My Enroll</title>

      
      {!user ? (
        <p className="text-center text-gray-400">
          Please log in to view your enrolled courses.
        </p>
      ) : enrolledCourses.length === 0 ? (
     
        <p className="text-center text-gray-400">
          You haven’t enrolled in any course yet.
        </p>
      ) : (
        // 🎓 Enrolled Course Grid
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <motion.div
              key={course._id}
              whileHover={{ scale: 1.05 }}
              className="bg-[#06291f] p-4 rounded-xl shadow-md border border-green-700"
            >
              <img
                src={course.image}
                alt={course.title}
                className="rounded-xl mb-3 h-40 w-full object-cover"
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {course.title}
              </h3>
              <p className="text-green-400 font-medium mb-2">
                Price: ${course.price}
              </p>
              <p className="text-gray-400 text-sm">
                Enrolled on:{" "}
                {course.enrolledAt
                  ? new Date(course.enrolledAt).toLocaleDateString()
                  : "N/A"}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEnrolledCourses;
