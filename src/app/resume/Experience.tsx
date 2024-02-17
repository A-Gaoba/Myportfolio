import React from 'react';
import { FaCircle, FaBriefcase } from 'react-icons/fa';

const experienceHistory = [
  {
    company: "Freelance",
    year: "2022 — 2024",
    description: "Worked as a freelancer, taking on various software development projects and delivering high-quality solutions to clients.",
  },
  {
    company: "Startup Company",
    year: "2023",
    description: "Co-founded a startup company with a friend, contributing to the growth and success of our business through innovative approaches and dedicated teamwork.",
  },
  {
    company: "University",
    year: "2023",
    description: "Engaged in a temporary role at the university, gaining hands-on experience in an academic setting for 2 months.",
  },
  // ... other experience entries
];

const Experience = () => {
  return (
    <div className="p-8 border-2 rounded-xl mt-6">
      <div className="flex items-center dark:text-white mb-6">
        <FaBriefcase className="text-4xl text-orange-500 mr-4" />
        <h2 className="text-3xl font-bold">Experience</h2>
      </div>
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-orange-500 opacity-30"></div>
        {experienceHistory.map((exp, index) => (
          <div key={index} className="flex items-center dark:text-white mb-4 pl-10">
            <div>
              <FaCircle className="text-xs text-orange-500 absolute left-5 -ml-[5px] mt-3 opacity-80" />
              <h3 className="font-bold text-lg">{exp.company}</h3>
              <p className="text-orange-500">{exp.year}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
