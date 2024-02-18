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
      <button type='button' onClick={toggleInformation} className="icon-button lg:hidden mr-4">
        <FiInfo  size={24} /> {/* Conditional Toggle for Information */}
      </button>
      {showInformation && <Information />}

      <button type='button' onClick={toggleLanguage} className="icon-button lg:hidden mr-4">
        <FiBook size={24}/> {/* Conditional Toggle for Language */}
      </button>
      {showLanguage && <Language />}

      <button type='button' onClick={toggleSkills} className="icon-button lg:hidden">
        <FiStar size={24}/> {/* Conditional Toggle for Skills */}
      </button>
      {showSkills && <Skills />}
    </div>
  );
};

export default Sidebar;
