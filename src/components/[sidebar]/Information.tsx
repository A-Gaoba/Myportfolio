import Image from 'next/image';
import React from 'react';
import { FiMail, FiPhone, FiCalendar, FiMapPin } from 'react-icons/fi'; // Importing icons

import img from "../../../public/photo.png";

function Information() {
  // Creating an array of information objects
  const infos = [
    { label: "Email", value: "abdulrahmangooba@gmail.com", Icon: FiMail },
    { label: "Phone", value: "+7 917-482-84-74", Icon: FiPhone },
    { label: "Birthday", value: "jun 16, 1997", Icon: FiCalendar },
    { label: "Location", value: "Ufa, Russia", Icon: FiMapPin },
  ];

  return (
    <section className="flex flex-col gap-4 justify-center items-center">
      <div className='max-w-sm flex flex-col gap-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md'>
        <div className='self-center'>
          <Image src={img} alt="Profile Picture" width={120} height={120} className='rounded-full shadow-lg' objectFit='cover' quality={100} />
        </div>
        <div className="text-center">
          <h1 className='text-xl font-semibold dark:text-gray-100 text-gray-900 mb-4'>Abdulrahman Gaoba</h1>
          <p className='text-md dark:text-white text-gray-700'>
            <span className='bg-blue-100 dark:bg-gray-400 p-1 px-3 rounded-md'>
              Web Developer
            </span>
          </p>
        </div>
      </div>

      <div>
        <div className='w-full h-[1px] bg-orange-500'></div>
        <div className="p-4">
          <ul className="list-none space-y-2">
            {infos.map(({ label, value, Icon }) => (
              <li className="flex items-center dark:text-white text-gray-800 space-x-4" key={label}>
                <Icon className="inline-block" size={24}/> 
                <div className="flex-1">
                  <div className="text-sm font-bold">{label}</div> 
                  <div className="text-xs">{value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}

export default Information;
