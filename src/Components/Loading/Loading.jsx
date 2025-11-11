import React from "react";
import "../../index.css";

const Loading = () => {
  const letters = ["L", "O", "A", "D", "I", "N", "G"];

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="grid grid-cols-7 gap-0 w-[336px] h-12 perspective-[350px] font-poppins font-extrabold text-transparent text-[1.8em]">
        {letters.map((letter, i) => (
          <div
            key={i}
            className="relative transform-style-preserve-3d animate-translateZ"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {/* 6 Faces */}
            <div className="face front">{letter}</div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
