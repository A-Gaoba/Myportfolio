import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaCamera, FaPaintBrush } from 'react-icons/fa';

const serviceData = [
  {
    Icon: FaPaintBrush,
    title: "Web Design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    Icon: FaLaptopCode,
    title: "Web Development",
    description: "High-quality development of sites at the professional level."
  },
  {
    Icon: FaMobileAlt,
    title: "Mobile Apps",
    description: "Professional development of applications for iOS and Android."
  },
  {
    Icon: FaCamera,
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level."
  },
];

function WhatIDo() {
  return (
    <div className="max-w-4xl mx-auto p-5 border-2 rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-start dark:text-white mb-6">What I&lsquo;m Doing</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {serviceData.map(({ Icon, title, description }, index) => (
          <div key={index} className="flex items-start gap-4 border-2 p-6 rounded-xl">
            <div className="text-4xl md:text-6xl text-orange-400 p-2 flex-shrink-0">
              <Icon />
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
              <p className="dark:text-gray-300 mt-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatIDo;
