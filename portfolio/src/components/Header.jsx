import { Link } from "react-router-dom";

const Header = () => {
return (
  <>
    <header className="bg-gradient-to-r from-[#393e46] via-[#222831] to-[#00adb5] shadow-lg font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <span
            className="text-2xl font-sans font-bold text-white"
          >
            Portfolio
          </span>
        </div>
        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <a href="#home" className="text-[#e0f7fa] hover:text-[#00adb5] font-medium font-sans transition">Home</a>
          <a href="#about" className="text-[#e0f7fa] hover:text-[#00adb5] font-medium font-sans transition">About</a>
          <a href="#skills" className="text-[#e0f7fa] hover:text-[#00adb5] font-medium font-sans transition">Skills</a>
          <a href="#projects" className="text-[#e0f7fa] hover:text-[#00adb5] font-medium font-sans transition">Projects</a>
          <a href="#contact" className="text-[#e0f7fa] hover:text-[#00adb5] font-medium font-sans transition">Contact</a>
        </nav>
        <a
          href="https://drive.google.com/file/d/1LbXXWTS_leIA6OlbhIgMg2uQMt_y2iCf/view?usp=drivesdk"
          className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#00adb5] to-[#393e46] text-white shadow hover:from-[#00bfae] hover:to-[#222831] transition font-bold font-sans border border-[#00adb5]"
        >
          Download CV
        </a>
      </div>
    </header>
  </>
);
};

export default Header;
