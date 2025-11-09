import React from "react";
import { NavLink } from "react-router";
import {
  MdDashboard,
  MdPerson,
  MdMessage,
  MdHelpOutline,
  MdSettings,
} from "react-icons/md";
import { FaBookOpen, FaClipboardList, FaEdit, FaGraduationCap, FaPlusCircle } from "react-icons/fa";

const SidebarRadio = () => {
  const menuItems = [
    {
      id: "dashboard",
      icon: <FaBookOpen />,
      label: "All Coures",
      path: "/dashboard/all-courses",
    },
    { id: "profile", icon:   <FaPlusCircle />, label: "Add Course", path: "/dashboard/add-course" },
    {
      id: "messages",
      icon: <FaClipboardList />,
      label: "Enrolled Course",
      path: "/dashboard/my-enrolled-course",
    },
    { id: "help", icon:    <FaGraduationCap />, label: "My Course", path: "/dashboard/my-course" },
    {
      id: "settings",
      icon: <FaEdit /> ,
      label: "Update Course",
      path: "/dashboard/update-course",
    },
  ];

  return (
    <div className="flex justify-start items-start w-full pl-6">
      <div className="flex flex-row bg-[#1b1a1a] text-white rounded-2xl p-2 shadow-lg shadow-black/20">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `group relative flex items-center justify-center cursor-pointer transition-all duration-300 rounded-xl p-3 mx-1 ${
                isActive
                  ? "bg-[#004d92] text-white"
                  : "text-gray-400 hover:bg-[#2a2a2a] hover:text-[#8cb4ff]"
              }`
            }
          >
            <span
              className={({ isActive }) =>
                `text-2xl transition-transform duration-300 ${
                  isActive ? "scale-125 text-[#8cb4ff]" : ""
                }`
              }
            >
              {item.icon}
            </span>

            {/* Hover label */}
            <span className="absolute bottom-[-60px] text-sm font-medium bg-[#004d92] text-white px-2 py-1 rounded-md opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarRadio;
