import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
import logoAnimated from './assets/logo_animated.mp4';

function TopBar() {
  return (
    <div className="top-banner">
      <div className="logo-container">
      <video className="logo" src={logoAnimated} autoPlay loop muted />
      </div>
      <div className="navbar-container">
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><a href="https://www.linkedin.com/in/erin-foley-yale" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
