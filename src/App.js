import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import Accueil from './components/Accueil';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Forfaits from './components/Forfaits';
import Assistance from './components/Assistance';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './container.css';
import back02 from './assets/back02.png';
import { StyleSheetManager } from 'styled-components';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleAnimationComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  useEffect(() => {
    document.title = 'ISS09 Informatiques saverdun';
    const faviconLink = document.querySelector("link[rel='icon']");
    faviconLink.href = `${process.env.PUBLIC_URL}/logo.ico`;
  }, []);

  return (
    <StyleSheetManager target={document.head}>
      <Router>
        <div className={showIntro ? "intro-container" : ""}>
          {showIntro ? null : <Navbar />}
          <Routes>
            {showIntro && (
              <Route path="/" element={<IntroAnimation onAnimationComplete={handleAnimationComplete} />} />
            )}
            {!showIntro && <Route path="/" element={<Accueil />} />}
            <Route path="/forfaits" element={<Forfaits />} />
            <Route path="/assistance" element={<Assistance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {showIntro ? null : <Footer />}
        </div>
        {!showIntro && <img src={back02} alt="Background" className="background-image" />}
      </Router>
    </StyleSheetManager>
  );
}

export default App;