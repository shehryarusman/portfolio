import React, { useState, useEffect } from 'react';
import { Banner } from './Banner';
import { NavBar } from './NavBar';
import { Skills } from './Skills';
import '../Homepage.css';



const HomePage = ({ onAnimationComplete }) => {
  const [minimize, setMinimize] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimize(true);
      setTimeout(() => {
        setShowBanner(true);
        setShowNavBar(true);
        setShowSkills(true);
        onAnimationComplete();
      }, 1000);
    }, 6000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className={`home-page ${minimize ? 'minimized' : ''}`}>
      <div className="drawing-container">
        <svg className={`drawing ${minimize ? 'minimized' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200">
          <text className="name-text" x="50%" y="25%" dominantBaseline="middle" textAnchor="middle">
            <tspan x="50%" dy="-0.05em">Shehryar</tspan>
            <tspan x="50%" dy="1em">Usman</tspan>
          </text>
        </svg>
      </div>
      {showBanner && (
        <div className="banner-container">
          <Banner />
        </div>
      )}
      {showNavBar && <NavBar />}
      {showSkills && (
        <div className="skills-container">
          <Skills />
        </div>
      )}
    </div>
  );
};

export default HomePage;