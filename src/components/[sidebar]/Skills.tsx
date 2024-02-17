import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';


const Skills: React.FC = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React.js",
    "Node.js",
    "Tailwind",
    "CSS",
    "Express",
    "MongoDB",
    "Postgresql",
    "prisma",

  ];

  return (
    <div className="flex justify-center items-center gap-4 p-4 flex-col">
      <div className='w-full h-[1px] bg-orange-500'></div>
      <h1 className='self-start text-xl font-bold'>Skills</h1>
      <div className='flex flex-wrap gap-4'>
        {skills.map((skill) => (
          <div key={skill} className="bg-gray-200 text-xs dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-md shadow">
            {skill}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col items-center gap-2">
        <div className='w-full h-[1px] bg-orange-500 my-4'></div>
        <div className="flex gap-4">
          <FaFacebookF className="text-2xl cursor-pointer" />
          <FaWhatsapp className="text-2xl cursor-pointer" />
          <FaInstagram className="text-2xl cursor-pointer" />
          <FaTwitter className="text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Footer */}
      <div className='w-full h-[1px] bg-orange-500 my-2'></div>
      <footer className="text-center text-sm">
        © 2024 Gaoba. All rights reserved.
      </footer>
    </div>
  );
};

export default Skills;
