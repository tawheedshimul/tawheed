import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaFire, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Firebase", icon: <FaFire className="text-yellow-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> }
];

const SkillsGrid = () => {
  return (
    <div className=" mx-auto py-8 border-dashed border-gray-800 border-2">
      <h2 className="text-3xl font-bold text-center text-gradient mb-6">My Skills</h2>
      <div className="p-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="mt-2 text-gray-700 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
