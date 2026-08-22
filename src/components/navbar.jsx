import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import '../styles/Navbar.css';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="brand-link" onClick={closeMenu}>
            <span className="brand-name">maria nadine</span>
          </Link>

          <button
            className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle light and dark mode"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="toggle-track">
              <Sun className="toggle-icon sun-icon" size={14} />
              <Moon className="toggle-icon moon-icon" size={14} />
            </span>
            <span className="toggle-thumb" />
          </button>
        </div>

        <button
          className={`hamburger-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>

        <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="star-icon">✩</span>}
                <span>home</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/works"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="star-icon">✩</span>}
                <span>works</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/exp"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="star-icon">✩</span>}
                <span>experience</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/stack"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="star-icon">✩</span>}
                <span>stack</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="star-icon">✩</span>}
                <span>shop</span>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}