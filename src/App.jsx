import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import AboutModal from "./components/AboutModal";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b bg-black text-white">
        <Routes>
          <Route path="/not-found" element={<PageNotFound />} />
          <Route
            path="/"
            element={
              <>
                <Home handleOpenModal={handleOpenModal} />
                <Projects />
                <ContactPage />
                {isModalOpen && <AboutModal handleCloseModal={handleCloseModal} />}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
