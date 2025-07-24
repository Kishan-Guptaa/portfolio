import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* 🌐 Navbar Container */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] flex items-center justify-between">
        <h1 className="text-xl font-extrabold tracking-wide text-white bg-black/30 px-4 py-2 rounded-full">
          &lt;<span className="text-blue-300">KISHAN</span>/&gt;
        </h1>

        {/* 🔴 Desktop Navbar */}
        <motion.nav
          className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-gray-800 shadow-md"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex gap-6 text-sm font-medium">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className="text-gray-300 hover:text-white transition cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* 🍔 Hamburger Icon */}
            <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </div>
        </motion.nav>
      </div>

      {/* 📱 Mobile Dropdown + Background Blur */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 🔵 Blur Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* 📱 Mobile Menu */}
            <motion.ul
              ref={dropdownRef}
              className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 
                         w-11/12 max-w-sm bg-zinc-900 text-white py-6 px-4 rounded-xl z-40 
                         shadow-2xl flex flex-col items-center gap-5 backdrop-blur-md border border-gray-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="text-lg hover:text-gray-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
