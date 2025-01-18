'use client'

import React from 'react';
import { motion } from 'framer-motion';
import ShinyText from '../../components/ShinyText';

interface Language {
  name: string;
  level: string;
  proficiency: number;
}

const languages: Language[] = [
  { name: 'Arabic', level: 'Native', proficiency: 100 },
  { name: 'English', level: 'Intermediate', proficiency: 70 },
  { name: 'Russian', level: 'Intermediate', proficiency: 60 },
];

const LanguageProficiency: React.FC = () => {
  return (
    <motion.div 
      className="flex justify-center items-center gap-4 p-4 flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className='w-full h-[1px] bg-orange-500'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.h1 
        className='self-start text-xl font-bold'
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ShinyText>Language</ShinyText>
      </motion.h1>
      <motion.div 
        className='flex gap-4'
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {languages.map((language) => (
          <motion.div 
            key={language.name} 
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="relative">
              <svg className="transform -rotate-90 w-16 h-16" viewBox="0 0 96 96">
                <circle cx="48" cy="48" r="44" stroke="gray" strokeWidth="2" fill="transparent" />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="44"
                  stroke="orange"
                  strokeWidth="4"
                  strokeDasharray="276.46"
                  strokeDashoffset="276.46"
                  fill="transparent"
                  initial={{ strokeDashoffset: 276.46 }}
                  animate={{ strokeDashoffset: 276.46 - (language.proficiency / 100) * 276.46 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div>
                  <motion.p 
                    className="text-[12px] font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {language.name}
                  </motion.p>
                  <motion.p 
                    className="text-[8px] text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    {language.level}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LanguageProficiency;

