import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-cream shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img
          src="/assets/logo.png"
          alt="TheThreeBRose Logo"
          className="h-10 w-10 object-contain"
          loading="lazy"
        />
        <span className="text-coffeeBrown font-bold text-2xl">TheThreeBRose</span>
      </div>
      <ul className="flex space-x-6 text-coffeeBrown font-semibold">
        <li>
          <Link to="/" className="hover:text-lightBrown transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-lightBrown transition">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-lightBrown transition">Contact</Link>
        </li>
        {!isAuthenticated ? (
          <li>
            <Link to="/login" className="hover:text-lightBrown transition">Owner</Link>
          </li>
        ) : (
          <li>
            <button
              onClick={logout}
              className="hover:text-lightBrown transition bg-transparent border-none cursor-pointer font-semibold"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
