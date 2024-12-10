import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-gray-800 shadow-md z-50'>
      <div>
        <h1 className='text-2xl font-bold'>SK.</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500} className='hover:text-blue-600 cursor-pointer'>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className='hover:text-blue-600 cursor-pointer'>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} className='hover:text-blue-600 cursor-pointer'>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500} className='hover:text-blue-600 cursor-pointer'>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} className='hover:text-blue-600 cursor-pointer'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;