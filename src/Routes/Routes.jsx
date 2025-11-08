import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import DashBoard from "../Pages/DashBoard/DashBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
      path:"/courses",
      Component:Courses
      },
      {
        path:"/dashboard",
        Component:DashBoard
      }
    ]
  },
]);
