// src/components/MainContainer.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blue from './Blue';
import Red from './Red';
import Green from './Green'; // New Green component
import Yellow from './Yellow'; // New Yellow component
import Home from './Home';

const MainContainer = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} /> {/* New route for Green */}
        <Route path="/yellow" element={<Yellow />} /> {/* New route for Yellow */}
      </Routes>
    </div>
  );
};

export default MainContainer;
