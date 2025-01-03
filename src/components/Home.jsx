import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaGithub, FaPhone, FaWhatsapp, FaArrowRight, FaArrowDown } from 'react-icons/fa';
import CanvasAnimation from './CanvasAnimation';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';

const Home = ({ handleOpenModal }) => {
  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    if (lowercasedTerm.includes('about')) {
      handleOpenModal(); 
    } else if (lowercasedTerm.includes('project')) {
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    } else if (lowercasedTerm.includes('contact')) {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    } else if (lowercasedTerm.includes('phone')) {
      window.open('tel:', '_blank');
    } else if (lowercasedTerm.includes('whatsapp')) {
      window.open('https://wa.me/', '_blank');
    } else if (lowercasedTerm.includes('linkedin')) {
      window.open('https://www.linkedin.com/in/vikas-sharma-01851a344/', '_blank');
    } else if (lowercasedTerm.includes('instagram')) {
      window.open('https://www.instagram.com', '_blank');
    } else if (lowercasedTerm.includes('email') || lowercasedTerm.includes('mail')) {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    } else if (lowercasedTerm.includes('twitter')) {
      window.open('https://twitter.com', '_blank');
    } else if (lowercasedTerm.includes('github')) {
      window.open('https://github.com/Vikas-Sharma04', '_blank');
    }
  };

  return (
    <div className='min-h-screen flex justify-center'>
      <CanvasAnimation />
      
      <div className="absolute top-4 right-10 flex flex-row space-x-6">
        <div className='px-2'>
          <SearchBar handleSearch={handleSearch} />
        </div>
        
        <div className="flex space-x-4">
          <a
            href="tel:"
            rel="noopener noreferrer"
            className="transition transform duration-300 hover:scale-125 hover:text-red-400"
          >
            <FaPhone size={30} />
          </a>
          <a
            href="https://wa.me/"
            rel="noopener noreferrer"
            className="transition transform duration-300 hover:scale-125 hover:text-green-500"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>

      <div className="absolute top-1/2 left-4 sm:left-10 md:left-20 transform -translate-y-1/2 flex flex-col items-start justify-center space-y-4 text-white p-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-left">
          Vikas Sharma
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-serif text-left">
          Innovative Coder and Web Developer
        </p>
        <div className="flex items-center mt-4 space-x-2">
          <a
            href="#about"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleOpenModal}
          >
            About Me
          </a>
          <FaArrowRight className=" text-2xl sm:text-3xl" />
        </div>
      </div>

      <div className="hidden sm:flex flex-grow items-center justify-center">
        <img src="/logo.png" alt="Profile" className="w-1/3 h-auto" />
      </div>

      <div className="flex items-center justify-center p-4 absolute bottom-0 w-full">
        <div className="flex flex-col items-center">
          <a href="#projects" className="bg-blue-500 text-white px-4 py-2 rounded">Projects</a>
          <FaArrowDown className="mt-2 size-8" />
        </div>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center space-y-6">
        <a
          href="https://www.linkedin.com/in/vikas-sharma-01851a344/"
          rel="noopener noreferrer"
          className="transition transform duration-300 hover:scale-125 hover:text-blue-600"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://twitter.com"
          rel="noopener noreferrer"
          className="transition transform duration-300 hover:scale-125 hover:text-blue-500"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          className="transition transform duration-300 hover:scale-125 hover:text-pink-600"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="#contact"
          rel="noopener noreferrer"
          className="transition transform duration-300 hover:scale-125 hover:text-yellow-300"
        >
          <FaEnvelope size={30} />
        </a>
        <a
          href="https://github.com/Vikas-Sharma04"
          rel="noopener noreferrer"
          className="transition transform duration-300 hover:scale-125 hover:text-gray-600"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

Home.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
};

export default Home;
