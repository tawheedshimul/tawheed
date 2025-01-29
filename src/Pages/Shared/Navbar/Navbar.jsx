import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBlog, FaProductHunt, FaPhone } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobile) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // Reset on unmount
        };
    }, [isMobile]);

    // Close menu on link click
    const handleLinkClick = () => {
        setIsMobile(false);
    };

    return (
        <nav className="p-4 backdrop-blur-lg bg-[#151515] bg-opacity-75  w-full z-50">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <div className="text-white text-2xl font-bold text-gradient">Tawheed</div>

                {/* Navigation Links */}
                <div className="hidden lg:flex space-x-6 items-center text-white">
                    <Link
                        to="/"
                        className={`flex items-center space-x-2 text-lg ${location.pathname === "/" ? "text-teal-600" : ""
                            }`}
                    >
                        <FaHome />
                        <span>Home</span>
                    </Link>
                    <Link
                        to="/blog"
                        className={`flex items-center space-x-2 text-lg ${location.pathname === "/blog" ? "text-teal-600" : ""
                            }`}
                    >
                        <FaBlog />
                        <span>Blog</span>
                    </Link>
                    <Link
                        to="/product"
                        className={`flex items-center space-x-2 text-lg ${location.pathname === "/product" ? "text-teal-600" : ""
                            }`}
                    >
                        <FaProductHunt />
                        <span>Product</span>
                    </Link>
                    <Link
                        to="/contact"
                        className={`flex items-center space-x-2 text-lg ${location.pathname === "/contact" ? "text-teal-600" : ""
                            }`}
                    >
                        <FaPhone />
                        <span>Contact</span>
                    </Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div
                    className="lg:hidden flex flex-col space-y-1 cursor-pointer z-50"
                    onClick={() => setIsMobile(!isMobile)}
                >
                    <span
                        className={`w-6 h-1 bg-white transition-all ${isMobile ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-1 bg-white transition-all ${isMobile ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-1 bg-white transition-all ${isMobile ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobile && (
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[63px]  left-0 w-full h-screen bg-[#000000] bg-opacity-95 flex flex-col space-y-6 text-white"
                    >
                        <ul className="text-center p-4 space-y-6 text-xl">
                            <li>
                                <Link
                                    to="/"
                                    onClick={handleLinkClick}
                                    className={`flex items-center space-x-2 ${location.pathname === "/" ? "text-teal-600" : ""
                                        }`}
                                >
                                    <FaHome />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    onClick={handleLinkClick}
                                    className={`flex items-center space-x-2 ${location.pathname === "/blog" ? "text-teal-600" : ""
                                        }`}
                                >
                                    <FaBlog />
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/product"
                                    onClick={handleLinkClick}
                                    className={`flex items-center space-x-2 ${location.pathname === "/product" ? "text-teal-600" : ""
                                        }`}
                                >
                                    <FaProductHunt />
                                    <span>Product</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={handleLinkClick}
                                    className={`flex items-center space-x-2 ${location.pathname === "/contact" ? "text-teal-600" : ""
                                        }`}
                                >
                                    <FaPhone />
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                        <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" className="backdrop-blur-lg opacity-50 "  alt="Coding GIF" />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
