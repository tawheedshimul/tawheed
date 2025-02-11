import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaFire, FaDatabase } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, link: "https://getbootstrap.com/" },
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-500" />, link: "https://tailwindcss.com/" },
  { name: "React", icon: <FaReact className="text-blue-400" />, link: "https://reactjs.org/" },
  { name: "Firebase", icon: <FaFire className="text-yellow-500" />, link: "https://firebase.google.com/" },
  { name: "MongoDB", icon: <FaDatabase className="text-green-500" />, link: "https://www.mongodb.com/" },
  { name: "JavaScript", icon: <RiJavascriptFill className="text-yellow-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
];

const SkillsGrid = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="mx-auto py-8 border-dashed border-gray-800 border-2">
      <h2 className="text-3xl font-bold text-center text-gradient mb-6">My Skills</h2>
      <div className="p-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center shadow-md rounded-xl p-4 hover:shadow-lg transition-all duration-300 group"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="mt-2 text-gray-700 font-semibold text-gradient">{skill.name}</p>

            {/* Modern Tooltip */}
            {hoveredSkill === index && (
              <div
                className="absolute -top-10 bg-teal-500 text-white text-sm px-3 py-3 rounded-md shadow-lg transition-opacity duration-300"
                onMouseEnter={() => setHoveredSkill(index)} // Keep tooltip visible when hovering over it
              >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Visit {skill.name} Website
                </a>
                <div className="absolute w-3 h-3 bg-teal-500 transform rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;