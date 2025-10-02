import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-violet-600 text-white py-8 mt-10">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        
        {/* Left Side - Logo/Name */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Martin’s Portfolio</h2>
          <p className="text-sm text-violet-200">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Right Side - Links */}
        <div className="flex justify-center space-x-6 mb-4 md:mb-0">
          <a
            href="/"
            className="hover:text-violet-200 transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-violet-200 transition"
          >
            About
          </a>
          <a
            href="/services"
            className="hover:text-violet-200 transition"
          >
            Services
          </a>
          <a
            href="/contact"
            className="hover:text-violet-200 transition"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-200 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-200 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-200 transition text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
