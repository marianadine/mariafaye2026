import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Works from './pages/works';
import Exp from './pages/exp';
import Stack from './pages/stack';
import Shop from './pages/shop';

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <Link to="/">home</Link>
        <Link to="/works">works</Link>
        <Link to="/exp">experience</Link>
        <Link to="/stack">stack</Link>
        <Link to="/shop">shop</Link>
      </nav>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/exp" element={<Exp />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}