// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MovieSkills from "./components/MovieSkills";
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade-out
      setTimeout(() => setLoading(false), 700); // remove loader after fade
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && (
        <div className={`${fadeOut ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
          <Loader />
        </div>
      )}

      {!loading && (
        <div className="font-sans bg-black text-white relative">
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <MovieSkills />
                  <Projects />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
