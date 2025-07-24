import React from "react";
export default function TextHighlight({ children, color = "bg-blue-300" }) {
  return (
    <span className="relative inline-block font-semibold text-white">
      <span
        className={`absolute inset-x-0 bottom-1 h-3 ${color} opacity-40 -z-10 rounded blur-sm`}
      ></span>
      {children}
    </span>
  );
}
