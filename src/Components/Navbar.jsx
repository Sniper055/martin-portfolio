import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
      {/* Brand */}
      <h1 className=" NavBrand text-2xl font-bold text-violet-600 p-2">Martin</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg">
        {navLinks.map((link) => (
          <li key={link.to} className="hover:bg-violet-500 rounded-md transition duration-500 p-2">
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.to} className="hover:text-violet-500 transition">
              <Link to={link.to} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
