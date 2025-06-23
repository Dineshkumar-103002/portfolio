import { useState, useEffect } from "react";

const Home = () => {
  const roles = [
    "Software Developer",
    "AI/ML Engineer",
    "Blockchain Enthusiast"
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400); 
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const roleClass = fade
    ? "opacity-100 transition-opacity duration-400"
    : "opacity-0 transition-opacity duration-400";

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 text-white">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-2 animate-fade-in-down">
          Hi, <span className="block text-7xl md:text-9xl font-black leading-tight">Welcome</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 animate-fade-in-down">
          I'm <span className="text-green-400">Dinesh Kumar V</span>
        </h2>
        <h3
          className={`text-2xl md:text-3xl font-semibold mb-4 transition-all duration-500 ${roleClass}`}
        >
          {roles[currentRole]}
        </h3>
        <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl">
          I’m passionate about building intelligent, intuitive, and engaging digital experiences. My expertise lies at the intersection of frontend development, AI/ML research, and blockchain technology—delivering real-time, impactful solutions.
        </p>
        <div className="flex gap-4 mb-8">
          <a
            href="#about"
            className="inline-flex items-center text-lg font-semibold bg-green-500 hover:bg-green-600 px-6 py-3 rounded shadow transition"
          >
            My Story
            <span className="ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-white text-green-600 text-2xl">
              &rarr;
            </span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center text-lg font-semibold border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded transition"
          >
            Projects
          </a>
        </div>
      </div>
      {/* Right: Profile Image */}
      <div
        className="flex-1 min-h-[300px] bg-cover bg-center rounded-lg md:rounded-l-lg md:rounded-r-none animate-fade-in shadow-2xl"
        style={{ backgroundImage: "url('./src/assets/image.png')" }}
        aria-label="Profile background"
      ></div>
    </div>
  );
};
export default Home;
