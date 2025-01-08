import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4">
      <FaExclamationTriangle className="text-yellow-400 text-6xl sm:text-7xl mb-6 animate-pulse" />
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">404 Not Found</h1>
      <p className="text-lg sm:text-xl mb-6 text-center">
        The project you are looking for is not available right now. But don’t worry, it’s coming soon!
      </p>
      <p className="text-base sm:text-lg text-gray-300 mb-8 text-center">
        Stay tuned for more updates on exciting new projects.
      </p>
      <Link
        to="/"
        className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 text-white text-base sm:text-lg font-medium rounded-lg hover:bg-indigo-800 transition-transform hover:scale-105"
      >
        Go Back to Projects
      </Link>
    </section>
  );
};

export default PageNotFound;
