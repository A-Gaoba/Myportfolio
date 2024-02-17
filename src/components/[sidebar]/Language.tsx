import React from 'react';

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
    <div className="flex justify-center items-center gap-4 p-4 flex-col">
      <div className='w-full h-[1px] bg-orange-500'></div>
      <h1 className=' self-start text-xl font-bold '>Language</h1>
      <div className='flex gap-4'>
        {languages.map((language) => (
          <div key={language.name} className="text-center">
            <div className="relative">
              <svg className="transform -rotate-90 w-16 h-16" viewBox="0 0 96 96">
                <circle cx="48" cy="48" r="44" stroke="gray" strokeWidth="2" fill="transparent" />
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  stroke="orange"
                  strokeWidth="4"
                  strokeDasharray="276.46"
                  strokeDashoffset={`${276.46 - (language.proficiency / 100) * 276.46}`}
                  fill="transparent"
                  className="transition-all ease-in-out duration-1000"
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div >
                  <p className="text-[12px] font-semibold">{language.name}</p>
                  <p className="text-[8px] text-gray-500">{language.level}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageProficiency;
