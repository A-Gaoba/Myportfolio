import React from 'react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


function Summary() {
  return (
    <div className="max-w-4xl mx-auto ">
      <h2 className="text-2xl font-bold dark:text-white md:mb-6">About Me</h2>
      <div className=' p-4'>
        {/* <h1 className='mb-4 font-bold'>I’m Abdulrahman Gaoba</h1> */}
        <TextGenerateEffect words="I’m Abdulrahman Gaoba" className='mb-4 font-bold' />
        <p className="dark:text-gray-300 text-sm md:text-base">Welcome to my world of innovation and creativity! As a passionate software engineer and web developer with a keen eye for captivating UI/UX design, I bring dreams to life through elegant and functional solutions.</p>
        <p className="mt-2 dark:text-gray-300 text-sm md:text-base">With a relentless drive to deliver excellence, I thrive on crafting seamless user experiences that leave a lasting impression. Explore my portfolio, and let’s embark on an extraordinary digital journey together.</p>
      </div>
    </div>
  );
}

export default Summary;
