import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/home';
import Works from './pages/works';
import Exp from './pages/exp';
import Stack from './pages/stack';
import Shop from './pages/shop';
import ScrollToTop from './components/scrollToTop';
import CaseStudy from './components/CaseStudy';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/exp" element={<Exp />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/works/byaheko" element={<CaseStudy />} />
          </Routes>

          <footer className="footer-two-column">
            <p className="font-cursive">maria nadine faye rufo</p>
            <code>thank u for scrolling bestie!</code>
          </footer>
        </main>
      </BrowserRouter>
    </div>
  );
}