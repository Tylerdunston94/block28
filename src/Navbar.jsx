// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/green">Green</Link> {/* Add link for the Green component */}
      <Link to="/yellow">Yellow</Link> {/* Add link for the Yellow component */}
    </div>
  );
};

export default Navbar;
