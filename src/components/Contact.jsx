import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Message submitted.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-black text-white  px-6 md:px-16"
    >
      <Fade>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center text-gray-500 dark:text-white">
          Get In Touch
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          {/* <form
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 bg-[#1a1a1a]  p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div className="text-left">
              <label className="block mb-1 text-sm text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-2  border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="text-left">
              <label className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2  border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="text-left">
              <label className="block mb-1 text-sm text-gray-300">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Your message..."
                className="w-full px-4 py-2  border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-700 py-2 px-6 rounded-md text-white font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form> */}

          {/* Right: Profile Image + Social Links */}
          <div className="flex flex-col items-center lg:w-1/2 text-center">
            <img
              src="/portfolio-pic.jpg"
              alt="Kishan Gupta"
              className="w-48 h-48 rounded-full object-cover border-2 border-gray-500 shadow-lg mb-6"
            />
            <p className="text-gray-400 mb-6 text-lg">Also connect with me on:</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://github.com/Kishan-Guptaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-cyan-400 transform hover:scale-110 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kishangupta09/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-cyan-400 transform hover:scale-110 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/kishan_n_09/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-cyan-400 transform hover:scale-110 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/T2_c0de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-cyan-400 transform hover:scale-110 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/kishan.gupta.235585"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-cyan-400 transform hover:scale-110 transition duration-300"
              >
                <FaFacebook />
              </a>

            </div>
            <div className="relative h-10 w-full flex justify-center mt-8 gap-2 items-center group">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kishangupta.code@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-cyan-400 transform hover:scale-110 transition duration-300"
              >
                <HiOutlineMail />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kishangupta.code@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline text-white"
              >
                kishangupta.code@gmail.com
              </a>

              {/* Tooltip */}
              <span className="absolute -top-8 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to mail and connect with Kishan
              </span>
            </div>



          </div>
        </div>
      </Fade>
    </section>
  );
}
