import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import DashBoardLayout from "../Pages/DashBoardLayout/DashBoardLayout";
import AllCourses from "../Components/AllCourses/AllCourses";
import AddCourse from "../Pages/AddCourse/AddCourse";
import MyCourse from "../Pages/MyCourse/MyCourse";
import UpdateCourse from "../Pages/UpdateCourse/UpdateCourse";
import MyEnrolledCourse from "../Pages/MyEnrolledCourse/MyEnrolledCourse";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import axios from "axios";
import PrivateRoute from "../Provider/PrivateRoute";

// ✅ Base API
const BASE_URL = "https://learn-zone-server.vercel.app";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "dashboard",
        Component: DashBoardLayout,
        children: [
          {
            index: true,
            Component: AllCourses,
          },
          {
            path: "all-courses/course-details/:id",
            loader: ({ params }) =>
              fetch(`${BASE_URL}/course/${params.id}`),
              
            element: (
              <PrivateRoute>
                <CourseDetails />
              </PrivateRoute>
            ),
          },
          {
            path: "add-course",
            Component: AddCourse,
          },
          {
            path: "my-course",
            Component: MyCourse,
          },
          {
            path: "update-course/:id",
            loader: ({ params }) =>
              axios
                .get(`${BASE_URL}/course/${params.id}`)
                .then((res) => res.data),
            Component: UpdateCourse,
          },
          {
            path: "my-enrolled-course",
            Component: MyEnrolledCourse,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/registration",
    Component: Registration,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
