import { useState } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import AboutModal from "./components/AboutModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b bg-black text-white">
      <Home handleOpenModal={handleOpenModal} />
      <Projects />
      <ContactPage />

      {isModalOpen && <AboutModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default App;
