'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import ShinyText from '../../components/ShinyText';

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
        <ShinyText>Skills</ShinyText>
      </motion.h1>
      <motion.div
        className='flex flex-wrap gap-4'
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="bg-gray-200 text-xs dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-md shadow"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShinyText>{skill}</ShinyText>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="w-full flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className='w-full h-[1px] bg-orange-500 my-4'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <div className="flex gap-4">
          <SocialIcon Icon={FaFacebookF} />
          <SocialIcon Icon={FaWhatsapp} />
          <SocialIcon Icon={FaInstagram} />
          <SocialIcon Icon={FaTwitter} />
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className='w-full h-[1px] bg-orange-500 my-2'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.footer
        className="text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <ShinyText>© 2024 Gaoba. All rights reserved.</ShinyText>
      </motion.footer>
    </motion.div>
  );
};

const SocialIcon: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="text-2xl cursor-pointer" />
  </motion.div>
);

export default Skills;

