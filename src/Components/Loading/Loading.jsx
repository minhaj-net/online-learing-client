import React from "react";

const Loading = () => {
  return (
    <div className="relative w-[150px] h-[150px] flex items-center justify-center rounded-full shadow-[25px_25px_75px_rgba(0,0,0,0.55)] border border-[#333] overflow-hidden">
      
      {/* Inner pseudo before */}
      <div className="absolute inset-[20px] rounded-full border border-dashed border-[#444] shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]"></div>
      
      {/* Inner pseudo after */}
      <div className="absolute w-[50px] h-[50px] rounded-full border border-dashed border-[#444] shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]"></div>
      
      {/* Rotating radar span */}
      <div className="absolute top-1/2 left-1/2 w-1/2 h-full origin-top-left border-t border-dashed border-white animate-[radar81_2s_linear_infinite]">
        <div className="absolute top-0 left-0 w-full h-full bg-seagreen origin-top-left rotate-[-55deg] blur-[30px] drop-shadow-[20px_20px_20px_seagreen]"></div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes radar81 {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
