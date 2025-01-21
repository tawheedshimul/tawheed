import React from "react";

const HeroSection = () => {
    return (
        <section className="bg-gray-900 text-white h-screen flex items-center justify-center px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Left Section: Text */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-teal-400">Tawheed</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-6">
                        A passionate <span className="text-teal-400">Developer</span> and <span className="text-teal-400">Designer</span> crafting delightful digital experiences.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="#projects"
                            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md transition-all"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="border border-teal-500 hover:bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md transition-all"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src="https://www.svgrepo.com/show/295329/connect-transfer.svg"
                        alt="Hero"
                        className="rounded-full shadow-lg w-80 h-80 object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
