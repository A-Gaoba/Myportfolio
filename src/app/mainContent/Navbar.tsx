"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import ModeToggle from '@/components/ModToggle';

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const links = [
    { id: 1, path: "/", name: "home" },
    { id: 2, path: "/about", name: "about" },
    { id: 3, path: "/portfolio", name: "portfolio" },
    { id: 4, path: "/experience", name: "experience" },
    { id: 5, path: "/contact", name: "contact" },
  ];

  const toggleNav = () => setIsNavOpen(!isNavOpen);


  return (
    <div className='flex w-full justify-between -mt-2 mx-2'>
      <div className='self-center'>
        <ModeToggle />
      </div>
      <div className='flex md:w-1/2 justify-between border-2 py-3 px-5 rounded-bl-2xl rounded-tr-lg'>
        <ul className="hidden md:flex">
          {links.map(({ id, path, name }) => (
            <li key={id} className="px-4 font-medium text-gray-500 hover:scale-105 hover:text-white duration-200">
              <Link href={path}>
                <span className="capitalize cursor-pointer link-underline">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden z-10" onClick={toggleNav}>
          {isNavOpen ? <FaTimes size={30} className="text-gray-500" /> : <FaBars size={30} className="text-gray-500" />}
        </div>
        {isNavOpen && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
            {links.map(({ id, path, name }) => (
              <li key={id} className="py-6 text-4xl">
                <Link href={path}>
                  <span onClick={toggleNav} className="text-gray-500 capitalize">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};

export default Navbar;
