// src/components/Section.jsx
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Section({ id, bgColor, textColor, children }) {
  const { ref, inView } = useInView({ threshold: 0.4 });

  return (
    <section
      ref={ref}
      id={id}
      className={`min-h-screen px-6 py-24 transition-all duration-700 ${
        inView ? `${bgColor} ${textColor}` : "bg-gray-100 text-black"
      }`}
    >
      {children}
    </section>
  );
}
