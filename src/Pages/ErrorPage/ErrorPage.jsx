import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      {/* TV Screen */}
      <div className="relative w-[300px] h-[200px] bg-black border-[10px] border-[#333] rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.8),inset_0_0_50px_rgba(255,255,255,0.2)] overflow-hidden">
        {/* Static effect */}
        <div className="absolute inset-0 z-[1] bg-[repeating-linear-gradient(0deg,#000,#000_1px,#111_1px,#fff_1px,#333_2px)] animate-[flicker_0.1s_steps(20)_infinite]" />
        {/* Error Text */}
        <div className="absolute top-28 text-center left-46 -translate-x-1/2 -translate-y-1/2 text-red-600 text-[18px] font-bold tracking-[2px] drop-shadow-[2px_2px_5px_black] z-[2] animate-[glitch_0.5s_infinite]">
         <p> ERROR 404</p>
        </div>
      </div>

      {/* TV Stand */}
      <div className="w-[150px] h-[10px] bg-[#333] mt-[10px] rounded-[5px] shadow-[0_5px_10px_rgba(0,0,0,0.7)]" />

      {/* Animations */}
      <style>{`
        @keyframes flicker {
          0% {
            opacity: 0.8;
            transform: scaleY(1);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.01);
          }
          100% {
            opacity: 0.7;
            transform: scaleY(0.99);
          }
        }

        @keyframes glitch {
          0% {
            transform: translate(-50%, -50%) skewX(5deg);
            opacity: 0.9;
          }
          25% {
            transform: translate(-50%, -50%) skewX(-5deg);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) skewX(0deg);
            opacity: 1;
          }
          75% {
            transform: translate(-50%, -50%) skewX(-5deg);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) skewX(5deg);
            opacity: 0.9;
          }
        }
      `}</style>
      <div className="mt-8">
        <p  className="font-black text-4xl text-center mb-3"> O<span className="text-red-500">p</span>P<span className="text-red-500">s</span> !</p>
        <p className="font-black text-4xl"> P<span className="text-red-500">a</span>g<span className="text-red-500">e</span> N<span className="text-red-500">o</span>t F<span className="text-red-500">o</span>u<span className="text-red-500">n</span>d</p>
      </div>
    </div>
  );
};

export default ErrorPage;
