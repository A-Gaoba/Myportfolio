import React from 'react';
import Link from 'next/link';
import ModeToggle from '@/components/ModToggle';

const Navbar: React.FC = () => {
  return (
    <div className='flex w-full justify-between -mt-2 mx-2'>
      <div className='self-center'>
        <ModeToggle />
      </div>
      <div className='flex w-1/2 justify-between border-2 p-3 rounded-bl-2xl rounded-tr-lg'>
        <Link href="/">
          About
        </Link>
        <Link href="/">
          Resume
        </Link>
        <Link href="/">
          Portfolio
        </Link>
        <Link href="/">
          Blog
        </Link>
        <Link href="/">
          Contact
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
