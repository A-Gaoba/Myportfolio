import React from 'react';
import { motion } from 'framer-motion';

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="bg-gradient-to-r from-orange-700 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
        {children}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shine" />
    </motion.span>
  );
};

export default ShinyText;

