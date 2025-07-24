// import React from "react";
// import { Fade } from "react-awesome-reveal";

// const skills = [
//   { name: "HTML", icon: "https://skillicons.dev/icons?i=html&theme=light" },
//   { name: "CSS", icon: "https://skillicons.dev/icons?i=css&theme=light" },
//   { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript&theme=light" },
//   { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript&theme=light" },
//   { name: "React", icon: "https://skillicons.dev/icons?i=react&theme=light" },
//   { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs&theme=light" },
//   { name: "Express", icon: "https://skillicons.dev/icons?i=express&theme=light" },
//   { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb&theme=light" },
//   { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind&theme=light" },
//   { name: "Git", icon: "https://skillicons.dev/icons?i=git&theme=light" },
//   { name: "GitHub", icon: "https://skillicons.dev/icons?i=github&theme=light" },
//   { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode&theme=light" },
//   { name: "Java", icon: "https://skillicons.dev/icons?i=java&theme=light" },
//   { name: "C", icon: "https://skillicons.dev/icons?i=c&theme=light" },
//   { name: "C++", icon: "https://skillicons.dev/icons?i=cpp&theme=light" },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-24 px-6 md:px-20 bg-black text-white">
//       <Fade direction="up" triggerOnce>
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1B3C53] to-[#456882] bg-clip-text text-transparent">
//              Skills & Tools
//           </h2>
//           <p className="mt-4 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
//             Technologies and tools I use to craft dynamic, scalable, and responsive applications.
//           </p>
//         </div>

//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="group w-24 h-24 sm:w-28 sm:h-28 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-center items-center shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition duration-300 ease-in-out"
//             >
//               <img
//                 src={skill.icon}
//                 alt={skill.name}
//                 className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
//               />
//               <p className="mt-2 text-sm font-medium text-gray-200 group-hover:text-blue-400">
//                 {skill.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </Fade>
//     </section>
//   );
// }
