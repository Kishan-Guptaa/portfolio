import React from "react";
import TextHighlight from "./TextHighlight";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <Fade>
    <section id="about" className="py-20 px-4 sm:px-8 md:px-16 bg-black text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-gray-500 dark:text-white">
        About Me
      </h2>

      <section className="flex justify-center">
        <div className="w-full max-w-4xl  bg-opacity-60 shadow-xl  backdrop-blur-lg p-6 sm:p-8 text-white transition duration-300">
          {/* <Fade direction="up" triggerOnce cascade damping={0.1}> */}
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-100">
              I'm <TextHighlight color="bg-yellow-300">Kishan Gupta</TextHighlight>, a passionate{" "}
              <TextHighlight color="bg-pink-300">Full-Stack Web Developer</TextHighlight> with a deep
              curiosity for turning complex problems into elegant digital solutions. I thrive on building{" "}
              <TextHighlight color="bg-green-300">interactive interfaces</TextHighlight> and{" "}
              <TextHighlight color="bg-indigo-300">scalable backend logic</TextHighlight> that deliver
              seamless user experiences.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-100">
              My tech toolbox revolves around the powerful{" "}
              <TextHighlight color="bg-blue-300">MERN Stack</TextHighlight> —{" "}
              <TextHighlight color="bg-emerald-300">MongoDB</TextHighlight>,{" "}
              <TextHighlight color="bg-emerald-300">Express.js</TextHighlight>,{" "}
              <TextHighlight color="bg-emerald-300">React</TextHighlight>, and{" "}
              <TextHighlight color="bg-emerald-300">Node.js</TextHighlight>. I'm also skilled in crafting
              clean and responsive designs using{" "}
              <TextHighlight color="bg-purple-300">Tailwind CSS</TextHighlight> and bringing motion to
              life with{" "}
              <TextHighlight color="bg-fuchsia-300">Framer Motion</TextHighlight>.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-100">
              Beyond development, I’m consistently improving my logic and speed by practicing{" "}
              <TextHighlight color="bg-orange-300">Data Structures & Algorithms</TextHighlight> in{" "}
              <TextHighlight color="bg-orange-200">Java</TextHighlight>, guided by{" "}
              <TextHighlight color="bg-sky-300">AlgoPrep</TextHighlight>. These daily challenges shape
              how I think and write code under pressure.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-100">
              I believe in{" "}
              <TextHighlight color="bg-lime-300">continuous learning</TextHighlight>,{" "}
              <TextHighlight color="bg-cyan-300">team collaboration</TextHighlight>, and{" "}
              <TextHighlight color="bg-rose-300">building with impact</TextHighlight>. If you’re looking
              for someone who blends creativity with clean code — let’s build something great together.
            </p>
          {/* </Fade> */}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
        <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white px-4 py-2 rounded-full text-sm font-medium">
          Full Stack Developer
        </span>
        <span className="inline-block bg-green-100 text-green-800 dark:bg-green-800 dark:text-white px-4 py-2 rounded-full text-sm font-medium">
          JavaScript & React Enthusiast
        </span>
        <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-white px-4 py-2 rounded-full text-sm font-medium">
          Problem Solver
        </span>
      </div>
    </section>
    </Fade>
  );
}
