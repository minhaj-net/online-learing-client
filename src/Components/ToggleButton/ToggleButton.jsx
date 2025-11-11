import React, { useEffect, useState } from "react";
import "../../index.css";

const Switch = () => {
  const [checked, setChecked] = useState(false);
  const [theme,setTheme]=useState(localStorage.getItem("theme")|| "light")
  useEffect(()=>{
    const html=document.querySelector("html")
    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  },[theme])

  const handleToggle = (checked) => {
    console.log(checked);
     setChecked(checked); 
  setTheme(checked?"dark" : "light")
  };

  return (
    <div className="flex items-center justify-center h-[45px] mr-5">
      <label className="relative w-[95px] h-full cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => handleToggle(e.target.checked)}
          className="absolute opacity-0 w-0 h-0"
        />
        <div className="relative w-full h-full bg-[#252532] rounded-[165px] border border-[#32303e] p-[6px] shadow-[inset_0_5px_10px_0_#16151c,0_3px_6px_-2px_#403f4e] flex items-center">
          <div className="relative w-full h-full flex justify-between">
            {/* Toggle button */}
            <span
              className={`absolute h-[42px] w-[42px] rounded-full bg-gradient-to-b from-[#3b3a4e] to-[#272733] shadow-[inset_0_5px_4px_0_#424151,0_4px_15px_0_#0f0e17] transition-left duration-300 ease-in z-20 ${
                checked ? "left-[58%]" : "left-0"
              }`}
            ></span>

            {/* Indicator */}
            <span
              className={`absolute top-1/2 -translate-y-1/2 h-[25px] w-[25px] rounded-full border-3 border-[#ef565f] ${
                checked ? "animate-indicator" : "right-[10px]"
              }`}
            ></span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
