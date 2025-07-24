import React from "react";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll"; // 👈 Import Element
import { movieSkills } from "../data/movieSkills";

export default function MovieSkills() {
  const allSkills = [...movieSkills, ...movieSkills];

  return (
    <>
      {/* 👇 Wrap this in Element with name="skills" */}
      <Element name="skills">
        <section className="py-10 px-4 overflow-hidden relative">
          <style>
            {`
              @keyframes scrollX {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
            `}
          </style>

          <Fade >
            <h2 className="text-4xl md:text-5xl text-gray-500 dark:text-white font-bold text-center mb-4">
              Tech Skills
            </h2>
            <p className="text-md sm:text-lg text-gray-400 text-center mb-10">
              Meet the heroes behind the code:
            </p>

            <div className="w-full overflow-hidden">
              <div
                className="flex gap-12 whitespace-nowrap"
                style={{
                  animation: "scrollX 30s linear infinite",
                  width: `${allSkills.length * 70}px`,
                }}
              >
                {allSkills.map((skill, index) => (
                  <div key={index} className="inline-block">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </section>
      </Element>

      {/* 🔽 Skills Card Grid */}
      <section className="py-1 px-4 md:px-16 bg-black text-white">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 place-items-center">
          {movieSkills.map((skill, index) => (
            <div
              key={index}
              className={`relative group w-28 h-36 sm:w-32 sm:h-40 rounded-lg overflow-hidden bg-gradient-to-br ${skill.bg} shadow-md hover:shadow-blue-400/30 transition-transform transform hover:scale-105 duration-300`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition duration-300 z-0 rounded-lg" />

              {/* Icon */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain mx-auto mt-4 z-10 relative group-hover:scale-110 transition-transform duration-300"
              />

              {/* Text */}
              <div className="mt-4 text-center z-10 relative px-2">
                <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                <p className="text-xs text-white/70 italic">{skill.tagline}</p>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
