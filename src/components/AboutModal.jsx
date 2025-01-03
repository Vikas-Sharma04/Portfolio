import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaDatabase, FaServer, FaReact, FaNode } from 'react-icons/fa';

const AboutModal = ({ handleCloseModal }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    { name: 'React', icon: <FaReact size={35} />, link: '#', color: 'text-blue-500', hoverBgColor: '#61DBFB' },
    { name: 'Node.js', icon: <FaNode size={35} />, link: '#', color: 'text-green-500', hoverBgColor: '#68A063' },
    { name: 'MongoDB', icon: <FaDatabase size={35} />, link: '#', color: 'text-green-700', hoverBgColor: '#4DB33D' },
    { name: 'Express', icon: <FaServer size={35} />, link: '#', color: 'text-violet-600', hoverBgColor: '#8A2BE2' },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={handleCloseModal}
    >
      <div
        className="bg-black bg-opacity-50 rounded-lg p-6 sm:p-8 m-4 w-full max-w-3xl lg:max-w-5xl mx-auto relative shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside the modal
      >
        <button
          className="absolute top-4 right-4 text-3xl lg:text-4xl text-white hover:text-red-500 transition duration-200"
          onClick={handleCloseModal}
        >
          &times;
        </button>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">About Me</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6">
              I am a passionate web developer with expertise in building dynamic and responsive web applications. I have a strong command of front-end and back-end technologies, including React, Node.js, Express, and MongoDB, as well as proficiency in tools like Tailwind CSS and Bootstrap. Additionally, I excel in problem-solving and have a solid grasp of data structures and algorithms, enabling me to design efficient and scalable solutions.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mb-6">
              {['html', 'css', 'tailwind', 'javascript', 'jquery', 'bootstrap', 'node.js', 'express.js', 'react.js', 'mongoDB', 'postgresql', 'ejs', 'git', 'github', 'python', 'c' , 'c++' , 'ml' , 'flask', 'django', 'gui', 'canva'].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 font-bold text-gray-700 border border-gray-300 px-2 sm:px-3 lg:px-4 py-1 rounded-full text-xs sm:text-sm lg:text-base"
                >
                  #{skill}
                </span>
              ))}
            </div>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 mb-4">MERN Stack</h3>
            <div className="flex flex-wrap gap-4 justify-start">
              {icons.map((tech, index) => (
                <a
                  href={tech.link}
                  key={index}
                  className={`${tech.color} m-1 sm:m-2 transition transform duration-300 hover:scale-125 relative flex flex-col items-center`}
                  onMouseEnter={() => setHoveredIcon(tech.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  {tech.icon}
                  {hoveredIcon === tech.name && (
                    <div
                      className={`absolute bottom-full mb-2 px-2 py-1 rounded-md bg-opacity-90 text-white text-xs sm:text-sm lg:text-base font-bold shadow-md`}
                      style={{ backgroundColor: tech.hoverBgColor }}
                    >
                      <div
                        className="absolute w-2 h-2 rotate-45 -bottom-1 left-1/2 transform -translate-x-1/2"
                        style={{ backgroundColor: tech.hoverBgColor }}
                      ></div>
                      {tech.name}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <img
              src="/about.png"
              alt="Profile"
              className="w-48 sm:w-64 lg:w-full max-h-64 sm:max-h-96 lg:max-h-[28rem] rounded-xl shadow-xl transform hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

AboutModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default AboutModal;
