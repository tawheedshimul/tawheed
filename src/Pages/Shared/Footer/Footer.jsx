import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section: Brand and Tagline */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-teal-400">Your Name</h1>
          <p className="text-sm text-gray-400 mt-2">
            Crafting digital experiences with passion and precision.
          </p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex space-x-6">
          <a
            href="#about"
            className="text-gray-400 hover:text-teal-400 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-teal-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-teal-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577v-2.14c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.305 3.495.998.107-.774.418-1.305.76-1.605-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.522.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.654.241 2.873.118 3.176.77.84 1.234 1.912 1.234 3.222 0 4.607-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.577C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3.5v-12h3.5v12zm-1.75-13.381c-1.12 0-2.031-.916-2.031-2.044 0-1.131.912-2.047 2.031-2.047s2.031.916 2.031 2.047c0 1.128-.912 2.044-2.031 2.044zm13.5 13.381h-3.5v-6.568c0-1.567-.028-3.586-2.184-3.586-2.188 0-2.522 1.707-2.522 3.475v6.679h-3.5v-12h3.362v1.642h.048c.468-.888 1.611-1.824 3.319-1.824 3.55 0 4.208 2.338 4.208 5.379v6.803z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
