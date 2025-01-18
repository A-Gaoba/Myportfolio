'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const infos = [
  { label: "Email", value: "abdulrahmangooba@gmail.com", icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" },
  { label: "Phone", value: "+7 917-482-84-74", icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" },
  { label: "Birthday", value: "Jun 16, 1997", icon: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" },
  { label: "Location", value: "Ufa, Russia", icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function AnimatedProfile() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center py-4 md:p-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="w-full max-w-md dark:bg-[#0A0B14] rounded-xl shadow-2xl overflow-hidden border border-[#FF6B00]/20"
        variants={itemVariants}
      >
        <div className="relative h-40 bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D]">
          <motion.div 
            className="absolute -bottom-16 inset-x-0 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image 
              src="/photo.png" 
              alt="Profile Picture" 
              width={120} 
              height={120} 
              className="rounded-3xl border-4 border-[#FF8A3D] shadow-xl" 
              objectFit="cover"
            />
          </motion.div>
        </div>
        
        <div className="pt-20 pb-8 px-6 text-center">
          <motion.h1 
            className="text-2xl font-bold dark:text-white mb-2"
            variants={itemVariants}
          >
            Abdulrahman Gaoba
          </motion.h1>
          <motion.p 
            className="inline-block bg-[#FF6B00]/10 text-[#FF6B00] px-3 py-1 rounded-full text-sm font-semibold"
            variants={itemVariants}
          >
            Software Engineer
          </motion.p>
        </div>

        <motion.div 
          className="border-t border-[#FF6B00]/20 px-6 py-4"
          variants={containerVariants}
        >
          <ul className="space-y-4">
            {infos.map(({ label, value, icon }) => (
              <motion.li 
                key={label}
                className="flex items-center space-x-3 text-gray-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#FF6B00]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FF6B00]" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#FF6B00]">{label}</p>
                  <p className="text-sm dark:text-white text-gray-500 ">{value}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

