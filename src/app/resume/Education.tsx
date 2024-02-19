import React from 'react';
import { FaCircle, FaBook } from 'react-icons/fa';

const educationHistory = [
  {
    school: "Ufa University of Science and Technology",
    year: "2023 — 2024",
    description: "Pursued a degree in Software Engineering, focusing on the latest technologies and software development methodologies.",
  },
  {
    school: "Saint Petersburg Mining University",
    year: "2019 — 2020",
    description: "Studied the Russian language, immersing myself in the language and culture to enhance communication and deepen cross-cultural understanding.",
  },
  {
    school: "Sana'a University",
    year: "2016 — 2017",
    description: "Completed an intensive English language program, achieving fluency and developing skills critical for international communication.",
  },
  {
    school: "Alnahdah High School",
    year: "2014 — 2015",
    description: "Graduated as one of the top 10 students in my city with an impressive grade of 96.38%, demonstrating academic excellence and a strong foundation for future studies.",
  },
];


const Education = () => {
  return (
<div className="md:p-8 p-6 border-2 rounded-xl">
      <div className="flex items-center dark:text-white mb-6">
        <FaBook className="text-4xl text-orange-500 mr-4" />
        <h2 className="text-3xl font-bold">Education</h2>
      </div>
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-orange-500 opacity-30"></div>
        {educationHistory.map((edu, index) => (
          <div key={index} className="flex items-center dark:text-white mb-4 pl-10">
            <div>
              <FaCircle className="text-xs text-orange-500 absolute left-5 -ml-[5px] mt-3 opacity-80" />
              <h3 className="font-bold md:text-lg">{edu.school}</h3>
              <p className="text-orange-500 text-sm md:text-base">{edu.year}</p>
              <p className='text-xs md:text-base mt-1'>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
