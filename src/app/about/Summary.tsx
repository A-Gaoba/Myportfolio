import React from 'react';
import TrueFocus from './TrueFocus';


function Summary() {
  return (
    <div className="max-w-4xl mx-auto ">
      <h2 className="text-2xl font-bold dark:text-white md:mb-6 p-4">About Me</h2>
      <TrueFocus
        sentence="Welcome to my world of innovation and creativity! As a passionate software engineer and web developer with a keen eye for captivating UI/UX design, I bring dreams to life through elegant and functional solutions. With a relentless drive to deliver excellence, I thrive on crafting seamless user experiences that leave a lasting impression. Explore my portfolio, and let’s embark on an extraordinary digital journey together."
      />
    </div>
  );
}

export default Summary;
