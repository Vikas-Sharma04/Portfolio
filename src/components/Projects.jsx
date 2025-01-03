import laptop from '/laptop.png';
import ipl from '/ipl.png';
import tweets from '/tweets.png';
import vs_skills from '/vs_skills.png';

const projects = [
  {
    title: 'IPL Match Score Predictor',
    description: 'A project using machine learning to predict the IPL match score.',
    technologies: ['Python', 'Pandas', 'Numpy', 'Streamlit', 'Sklearn'],
    imageUrl: ipl,
    imageLink: 'http://localhost:8501',
    customClass: 'text-red-500 border-red-500 shadow-red-400',
  },
  {
    title: 'Tweets',
    description: 'A simple project using Django to make tweets on the web.',
    technologies: ['Python', 'Django'],
    imageUrl: tweets,
    imageLink: 'http://127.0.0.1:8000/tweet',
    customClass: 'text-green-500 border-green-500 shadow-green-400',
  },
  {
    title: 'VS Skills',
    description: 'A platform built to make education and coding easier for everybody.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'TailwindCSS'],
    imageUrl: vs_skills,
    imageLink: 'http://localhost:3000',
    customClass: 'text-violet-500 border-violet-500 shadow-violet-400',
  },
];

const Projects = () => {
  return (
    <div className="mx-auto p-8 lg:p-12 text-center bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen gradient-bg-project" id="projects">
      <h2 className="text-3xl font-bold mb-12 text-blue-500 text-center border-2 border-gray-400 p-2 inline-block rounded-lg">
        My Projects
      </h2>


      {/* Project Cards */}
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
          key={index}
          className="relative glowing-card gradient-bg-card rounded-xl overflow-hidden shadow-lg"
        >
          {/* Laptop with Project Image */}
          <div className="relative group flex justify-center">
            <div className="relative w-[300px] sm:w-[400px] lg:w-[400px] transform transition-transform duration-500 group-hover:scale-105">
              <img
                src={laptop}
                alt="Laptop Frame"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-[12%] left-[12.5%] w-[75%] h-[75%]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        
          {/* Project Details */}
          <div className="p-6 text-left">
            <h3 className={`text-xl font-bold mb-2 ${project.customClass}`}>
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.imageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Project
            </a>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Projects;
