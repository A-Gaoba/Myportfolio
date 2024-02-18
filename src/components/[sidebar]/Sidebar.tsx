"use client"

import React, { useState, useEffect } from 'react';
import Information from './Information';
import Skills from './Skills';
import Language from './Language';
import { FiInfo, FiBook, FiStar } from 'react-icons/fi';

const Sidebar = () => {
  // Initial states are always true for rendering without conditions
  const [showInformation, setShowInformation] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showLanguage, setShowLanguage] = useState(true);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  // Adjust to screen size dynamically
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth <= 768);
    };

    // Check screen size initially and on every window resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Toggle visibility only if on medium screen
  const toggleInformation = () => isMediumScreen && setShowInformation(!showInformation);
  const toggleSkills = () => isMediumScreen && setShowSkills(!showSkills);
  const toggleLanguage = () => isMediumScreen && setShowLanguage(!showLanguage);

  return (
    <div className="w-full xl:w-1/3 p-4 border-2 rounded-xl">
      <button onClick={toggleInformation} className="icon-button">
        <FiInfo /> {/* Conditional Toggle for Information */}
      </button>
      {showInformation && <Information />}

      <button onClick={toggleLanguage} className="icon-button">
        <FiBook /> {/* Conditional Toggle for Language */}
      </button>
      {showLanguage && <Language />}

      <button onClick={toggleSkills} className="icon-button">
        <FiStar /> {/* Conditional Toggle for Skills */}
      </button>
      {showSkills && <Skills />}
    </div>
  );
};

export default Sidebar;
