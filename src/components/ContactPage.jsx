import { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import message from "/message.png";

const ContactPage = () => {
  const [buttonState, setButtonState] = useState("idle"); 
  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonState("sending");

    setTimeout(() => {
      setButtonState("success");

      setTimeout(() => {
        setButtonState("idle");
      }, 3000);

      e.target.reset();
    }, 2000); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white gradient-bg-contact" id="contact">
      <h2 className="text-3xl font-bold my-4 text-blue-500 text-center border-2 border-gray-400 p-2 rounded-lg">
        Connect & Create!
      </h2>

      <div className="w-full mx-auto p-8">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:ml-36">
          <div className="w-full sm:w-2/3 lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <img
              src={message}
              alt="Contact"
              className="w-full h-auto object-cover max-w-sm lg:max-w-full"
            />
          </div>

          <div className="w-full sm:w-2/3 lg:w-1/2 bg-white p-8 shadow-lg shadow-gray-500 rounded-lg text-black">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-2 rounded-lg text-white text-center transition-all duration-300 ${
                  buttonState === "sending"
                    ? "bg-yellow-500"
                    : buttonState === "success"
                    ? "bg-green-500"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
                disabled={buttonState === "sending"}
              >
                {buttonState === "idle" && "Send Message"}
                {buttonState === "sending" && (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-pulse">Sending</span>
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-150">.</span>
                    <span className="animate-bounce delay-300">.</span>
                  </span>
                )}
                {buttonState === "success" && "Message Sent Successfully!"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex justify-center flex-wrap gap-8">
          <a
            href="https://www.linkedin.com/in/vikas-sharma-01851a344/"
            rel="noopener noreferrer"
            className="text-blue-600 text-3xl transition-transform transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl transition-transform transform hover:scale-125"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/Vikas-Sharma04"
            rel="noopener noreferrer"
            className="text-gray-700 text-3xl transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            rel="noopener noreferrer"
            className="text-pink-600 text-3xl transition-transform transform hover:scale-125"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
