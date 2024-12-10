import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-blue-50 to-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-4xl sm:text-7xl font-bold text-gray-800'
          >
            Hi, I'm Shubham Kulkarni
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 py-4 max-w-md'
          >
            A passionate web developer specializing in creating responsive and user-friendly websites. Currently pursuing B.Tech with a focus on modern web technologies.
          </motion.p>

          <div>
            <Link
              to='projects'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 cursor-pointer hover:scale-105 duration-200'
            >
              View Projects
              <span className='group-hover:rotate-90 duration-300 ml-1'>
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;