import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white transition-opacity duration-700 ease-in-out">
      
      {/* Animated 3 Dot Loader */}
      <div className="flex space-x-2 mb-6">
        <span className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce"></span>
      </div>

      {/* Main Text */}
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide animate-pulse">
        Welcome to My Portfolio
      </h1>

      {/* Subtext */}
      <p className="text-sm mt-2 text-gray-400">
        Building your experience...
      </p>
    </div>
  );
}
