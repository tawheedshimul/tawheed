// src/components/Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBlog, FaProductHunt, FaPhone } from "react-icons/fa";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="bg-gray-900 p-4">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <div className="text-white text-2xl font-bold">Tawheed</div>



                {/* Navigation Links (hidden on small screens, displayed on large) */}
                <div>
                    <ul
                        className={`lg:flex lg:space-x-6 space-y-4 lg:space-y-0 absolute lg:static top-16 left-0 w-full bg-gray-800 lg:bg-transparent text-white p-4 lg:p-0 transition-all duration-300 ${isMobile ? "block" : "hidden"}`}
                    >
                        <li>
                            <Link to="/" className="flex items-center space-x-2 text-lg">
                                <FaHome />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="flex items-center space-x-2 text-lg">
                                <FaBlog />
                                <span>Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/product" className="flex items-center space-x-2 text-lg">
                                <FaProductHunt />
                                <span>Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="flex items-center space-x-2 text-lg">
                                <FaPhone />
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Hamburger Icon (visible on small screens only) */}
                <div
                    className="lg:hidden flex flex-col space-y-1 cursor-pointer"
                    onClick={() => setIsMobile(!isMobile)}
                >
                    <span className={`w-6 h-1 bg-white ${isMobile ? "rotate-45 translate-y-2" : ""} transition-all`}></span>
                    <span className={`w-6 h-1 bg-white ${isMobile ? "opacity-0" : ""} transition-all`}></span>
                    <span className={`w-6 h-1 bg-white ${isMobile ? "-rotate-45 -translate-y-2" : ""} transition-all`}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
