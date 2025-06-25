import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & Close icons

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent background scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#393e46] via-[#222831] to-[#00adb5] shadow-lg font-sans transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <span className="text-2xl font-bold text-white">Portfolio</span>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#e0f7fa] hover:text-[#00adb5] font-medium transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://drive.google.com/file/d/1LbXXWTS_leIA6OlbhIgMg2uQMt_y2iCf/view?usp=drivesdk"
            className="hidden md:inline-block ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#00adb5] to-[#393e46] text-white shadow hover:from-[#00bfae] hover:to-[#222831] transition font-bold border border-[#00adb5]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          {/* Hamburger Icon (Mobile) */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col items-end">
          {/* Close Button */}
          <button
            className="text-white text-4xl m-6 focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX />
          </button>
          {/* Menu Links */}
          <nav className="w-full flex flex-col items-center space-y-8 mt-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#e0f7fa] hover:text-[#00adb5] text-2xl font-semibold transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1LbXXWTS_leIA6OlbhIgMg2uQMt_y2iCf/view?usp=drivesdk"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00adb5] to-[#393e46] text-white shadow hover:from-[#00bfae] hover:to-[#222831] transition font-bold border border-[#00adb5]"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
