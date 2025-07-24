// src/components/CustomCursor.jsx
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 border-2 border-white rounded-full"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        transition: "transform 0.1s ease-out",
      }}
    ></div>
  );
};

export default CustomCursor;
