
import React from 'react';
import Information from './Information';
import Skills from './Skills';
import Language from './Language';


const Sidebar = () => {
  return (
    <div className="w-full xl:w-1/3 p-4 border-2 rounded-xl ">
      <Information />
      <Language />
      <Skills />
    </div>
  );
};

export default Sidebar;
