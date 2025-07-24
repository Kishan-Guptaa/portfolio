import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [openApp, setOpenApp] = useState("about");
  const [currentSong, setCurrentSong] = useState("soundhelix");
  const [code, setCode] = useState(`// index.js\nfunction greet(name) {\n  console.log(\`Hello, \${name}!\`);\n}\n\ngreet("Kishan");`);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const audioRef = useRef();

  const base = import.meta.env.BASE_URL;

  const apps = [
    { id: "about", icon: "https://img.icons8.com/fluency/96/user-male-circle.png", title: "About" },
    { id: "spotify", icon: "https://img.icons8.com/fluency/96/spotify--v1.png", title: "Spotify" },
    { id: "vscode", icon: "https://img.icons8.com/fluency/96/visual-studio-code-2019.png", title: "VS Code" },
    { id: "mail", icon: "https://img.icons8.com/fluency/96/apple-mail.png", title: "Mail" },
  ];

  const songs = {
    soundhelix: {
      title: "Saiyaara",
      artist: "Tanisk Bagchi",
      src: `${base}Saiyaara.mp3`,
      img: `${base}Saiyaara.jpeg`,
    },
    arijit: {
      title: "Raataan Lambiyan",
      artist: "Arijit Singh",
      src: `${base}arijit-raataan.mp3`,
      img: `${base}Raataan-Lambiyan.jpeg`,
    },
    arijit1: {
      title: "Aur Mohabbat Kitni Karoon",
      artist: "Arijit Singh",
      src: `${base}Aur-Mohabbat-Kitni-Karoon.mp3`,
      img: `${base}Aur-Mohabbat-kitni-karoon.jpeg`,
    },
    arijit2: {
      title: "Aaj Ke Baad",
      artist: "Manan Bhardwaj and Tulsi Kumar",
      src: `${base}Aaj-Ke-Baad.mp3`,
      img: `${base}Aaj-Ke-Baad.jpeg`,
    },
    arijit3: {
      title: "Aankhon Ke Darmiya",
      artist: "Rishab Tiwari",
      src: `${base}Aankhon-Ke-Darmiya.mp3`,
      img: `${base}Aankhon-Ke-Darmiya.jpeg`,
    },
    arijit4: {
      title: "Jab Tu Sajan",
      artist: "Rochak Kohli, Mohit Chauhan, Gurpreet Saini",
      src: `${base}Jab-Tu-Sajan.mp3`,
      img: `${base}Jab-Tu-Sajan.jpeg`,
    },
    arijit5: {
      title: "Ibadatein",
      artist: "Awantika, Siddhant Kaushal, Anshul Garg",
      src: `${base}Ibadatein.mp3`,
      img: `${base}Ibadatein.jpeg`,
    },
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [currentSong]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    if (openApp === "about") {
      return (
        <div className="flex flex-col md:flex-row items-center gap-6 text-white">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold">Hi, I'm Kishan Gupta</h1>
            <TypeAnimation
              sequence={["Full Stack Developer", 1500, "MERN Stack Enthusiast", 1500, "Tech Explorer", 1500]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-sm sm:text-base text-blue-200"
            />
            <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto md:mx-0">
              I build modern web apps using MongoDB, Express, React & Node.js. Focused on clean UI,
              scalable backend, and real-world problem solving.
            </p>
          </div>
          <img
            src={`${base}portfolio-pic.jpg`}
            alt="Kishan Gupta"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full border-2 border-white shadow-lg object-cover"
          />
        </div>
      );
    }

    if (openApp === "spotify") {
      const song = songs[currentSong];
      return (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-green-400">Now Playing</h2>
          <img
            src={song.img}
            alt="Album Art"
            onError={(e) => (e.target.src = "https://upload.wikimedia.org/wikipedia/commons/4/4f/Music_note.svg")}
            className="w-32 h-32 mx-auto rounded-lg shadow-lg"
          />
          <p className="text-white">{song.title} - {song.artist}</p>
          <select
            value={currentSong}
            onChange={(e) => setCurrentSong(e.target.value)}
            className="bg-black border border-white text-white px-4 py-2 rounded-lg"
          >
            {Object.entries(songs).map(([key, value]) => (
              <option key={key} value={key}>{value.title}</option>
            ))}
          </select>
          <audio ref={audioRef} controls className="mx-auto w-full">
            <source src={song.src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      );
    }

    if (openApp === "vscode") {
      return (
        <div className="bg-[#1e1e1e] text-green-400 font-mono rounded-xl p-2 h-64 overflow-auto text-sm">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full bg-[#1e1e1e] text-green-400 font-mono outline-none resize-none"
            spellCheck="false"
          />
        </div>
      );
    }

    if (openApp === "mail") {
      return (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Send Me a Mail</h2>
          <p className="text-white">Click the button below to email me directly on Gmail.</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kishangupta.code@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            Open Gmail
          </a>
        </div>
      );
    }

    return <p className="text-gray-800 text-center">Welcome</p>;
  };

  return (
    <div className="min-h-screen bg-black px-2 sm:px-4 pt-28 pb-10 flex items-center justify-center">
      {/* Mobile View */}
      <div className="block sm:hidden w-full max-w-lg text-white">
        <div className="bg-black/90 backdrop-blur-md rounded-xl shadow-xl p-4">
          {renderContent()}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block w-full max-w-[960px]">
        <div className="relative rounded-xl shadow-2xl overflow-hidden border border-gray-700 bg-black">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1350&q=80')",
            }}
          />

          {/* Mac Window */}
          <div className="relative z-10 flex flex-col justify-between min-h-[500px]">
            {/* Top Bar */}
            <div className="w-full flex flex-wrap justify-between items-center px-4 py-2 bg-white/50 backdrop-blur-sm text-xs text-gray-900">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold"></span>
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Go</span>
                <span>Window</span>
                <span>Help</span>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <span>🔋 100%</span>
                <span>📶</span>
                <span>{currentTime}</span>
              </div>
            </div>

            {/* App Panel */}
            {openApp && (
              <div
                className={`m-4 ${
                  ["about", "spotify", "vscode", "mail"].includes(openApp)
                    ? "bg-black/90 text-white"
                    : "bg-white text-gray-900"
                } backdrop-blur-md rounded-xl shadow-xl p-4`}
              >
                <div className="flex justify-between mb-4 items-center">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-sm font-medium">
                    {apps.find((a) => a.id === openApp)?.title}
                  </span>
                  <button
                    className="text-inherit hover:opacity-70"
                    onClick={() => setOpenApp(null)}
                  >
                    ✕
                  </button>
                </div>
                {renderContent()}
              </div>
            )}

            {/* Dock */}
            <div className="mt-auto mb-4 mx-auto px-4 py-2 bg-white w-fit backdrop-blur-md rounded-3xl flex flex-wrap justify-center gap-3 shadow-lg">
              {apps.map((app) => (
                <div key={app.id} className="flex flex-col items-center w-12 sm:w-14">
                  <img
                    src={app.icon}
                    alt={app.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition duration-200 cursor-pointer"
                    onClick={() => setOpenApp(app.id)}
                  />
                  {openApp === app.id && (
                    <span className="mt-1 w-2 h-2 bg-black rounded-full animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
