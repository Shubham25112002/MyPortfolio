import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-blue-50 to-white flex justify-center items-center p-4'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Contact</p>
          <p className='py-4'>Get in touch with me</p>
        </div>
        
        <div className='flex flex-col space-y-4'>
          <div className='flex items-center space-x-2'>
            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
            </svg>
            <a href='mailto:shubhamkulkarni2511@gmail.com' className='text-gray-700 hover:text-blue-600'>
              shubhamkulkarni2511@gmail.com
            </a>
          </div>
          
          <div className='flex items-center space-x-2'>
            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
            </svg>
            <a href='tel:+919766439855' className='text-gray-700 hover:text-blue-600'>
              (+91) 9766439855
            </a>
          </div>
          
          <div className='flex items-center space-x-2'>
            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
            <span className='text-gray-700'>
              Vishnupuri, Nanded 431606
            </span>
          </div>
          
          <div className='flex items-center space-x-2'>
            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' />
            </svg>
            <a href='https://linkedin.com/in/shubham-kulkarni' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-blue-600'>
              LinkedIn: Shubham Kulkarni
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;