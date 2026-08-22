import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section: Brand Link + Theme Toggle */}
        <div className="navbar-left">
          <Link to="/" className="brand-link">
            <span className="brand-name">maria nadine</span>
          </Link>

          <button
            className={`toggle-switch ${isDarkMode ? 'active' : ''}`}
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
          >
            <span className="toggle-thumb" />
          </button>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="navbar-right">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="star-icon">✩</span>}
                <span>home</span>
              </>
            )}
          </NavLink>

          <NavLink to="/works" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {({ isActive }) => (
              <>
                {isActive && <span className="star-icon">✩</span>}
                <span>works</span>
              </>
            )}
          </NavLink>

          <NavLink to="/exp" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {({ isActive }) => (
              <>
                {isActive && <span className="star-icon">✩</span>}
                <span>experience</span>
              </>
            )}
          </NavLink>

          <NavLink to="/stack" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {({ isActive }) => (
              <>
                {isActive && <span className="star-icon">✩</span>}
                <span>stack</span>
              </>
            )}
          </NavLink>

          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
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