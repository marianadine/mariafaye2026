import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/navbar';
import Home from './pages/home';
import Works from './pages/works';
import Exp from './pages/exp';
import Stack from './pages/stack';
import Shop from './pages/shop';
import ScrollToTop from './components/scrollToTop';
import CaseStudy from './components/CaseStudy';

const getInitialDarkMode = () => {
  if (typeof window === 'undefined') return false;

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    return storedTheme === 'dark';
  }

  return false;
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/exp" element={<Exp />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/works/:projectId" element={<CaseStudy />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main className="page-content">
          <AnimatedRoutes />

          <footer className="footer-two-column">
            <p className="font-cursive">maria nadine faye rufo</p>
            <code>thank u for scrolling bestie!</code>
          </footer>
        </main>
      </BrowserRouter>
    </div>
  );
}