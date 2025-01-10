// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/Navbar.css"; // Import the CSS
import { useAuth } from '../context/AuthContext'; // Import AuthContext

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth(); // Get authentication state

  console.log('Navbar isAuthenticated:', isAuthenticated); // Debugging log

  const handleLogout = () => {
    setIsAuthenticated(false); // Clear authentication state
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h3>Grants Tool</h3> {/* Brand/Logo */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {!isAuthenticated && (
          <li><Link to="/register">Register</Link></li> /* Show only if not authenticated */
        )}
        {isAuthenticated && (
          <>
            <li><Link to="/profile">Profile</Link></li> {/* Show only if authenticated */}
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li> {/* Logout */}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
