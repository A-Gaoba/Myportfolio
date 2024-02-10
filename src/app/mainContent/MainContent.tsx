
import ModeToggle from '@/components/ModToggle';
import React from 'react';
import Navbar from './Navbar';

const MainContent = () => {
  return (
    <div className="flex-1 justify-center items-center p-4">
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <h1 className="font-bold text-xl mb-4">Main Content</h1>
          <ModeToggle />
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default MainContent;
