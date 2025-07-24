import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const allProjects = [
  {
    title: "ThrottleX – Bike & Car Explorer",
    description: "Explore bikes and cars with brand filters, contact form using EmailJS, and responsive design.",
    tech: ["React", "Tailwind CSS"],
    live: "https://kishan-guptaa.github.io/throttlex/",
    github: "https://github.com/Kishan-Guptaa/throttlex",
    image: "/images/throttlex.png",
  },
  {
    title: "Groozie App",
    description: "A stylish and simple to-do list with local storage, dark mode, and priority marking.",
    tech: ["EJS", "JavaScript", "TailwindCss"],
    live: "https://groziee.onrender.com/",
    github: "https://github.com/Kishan-Guptaa/groziee",
    image: "/images/Groozie.png",
  },
  {
    title: "Realtime Chess Game",
    description: "Multiplayer Chess game using Socket.IO for real-time communication, complete with elegant UI and live opponent moves.",
    tech: ["HTML", "CSS", "JavaScript", "Socket.IO", "Node.js"],
    live: "https://mychess-a6gr.onrender.com/",
    github: "https://github.com/yourusername/realtime-chess",
    image: "/images/chess.jpeg",
  },
];

export default function Projects() {
  return (
    <Fade>
      <section
        id="projects"
        className="bg-black text-white min-h-screen px-4 sm:px-8 md:px-20 pt-20 pb-28 flex flex-col items-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-gray-500 dark:text-white">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[230px]">
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {project.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    🚀 Tech: <span className="italic">{project.tech.join(", ")}</span>
                  </p>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                  >
                    Live <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300 flex items-center gap-1 text-sm"
                  >
                    Code <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/projects">
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-full transition duration-300">
              View More →
            </button>
          </Link>
        </div>
      </section>
    </Fade>
  );
}
