"use client";

import React, { useState, useEffect } from "react";
import Information from "./Information";
import Skills from "./Skills";
import Language from "./Language";
import { FiInfo, FiBook, FiStar } from "react-icons/fi";

const Sidebar = () => {
  const [showInformation, setShowInformation] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showLanguage, setShowLanguage] = useState(true);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleInformation = () =>
    isMediumScreen && setShowInformation(!showInformation);
  const toggleSkills = () => isMediumScreen && setShowSkills(!showSkills);
  const toggleLanguage = () => isMediumScreen && setShowLanguage(!showLanguage);

  return (
    <div className="w-full xl:w-1/3 p-4 border-2 rounded-xl relative">
      <p className="text-sm text-gray-500 mb-2 block md:hidden">
        Tap an icon to show or hide its section.
      </p>

      <button
        type="button"
        onClick={toggleInformation}
        className="icon-button lg:hidden mr-4"
        aria-label="Information about me"
      >
        <FiInfo size={24} />
      </button>
      {showInformation && <Information />}

      <button
        type="button"
        onClick={toggleLanguage}
        className="icon-button lg:hidden mr-4"
        aria-label="Languages I speak"
      >
        <FiBook size={24} />
      </button>
      {showLanguage && <Language />}

      <button
        type="button"
        onClick={toggleSkills}
        className="icon-button lg:hidden"
        aria-label="My skills"
      >
        <FiStar size={24} />
      </button>
      {showSkills && <Skills />}
    </div>
  );
};

export default Sidebar;
