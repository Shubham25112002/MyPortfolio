import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='sm:text-right pb-8 pl-4'
          >
            <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
              About
            </p>
          </motion.div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='sm:text-right text-4xl font-bold'
          >
            <p>Education & Background</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className='text-gray-600'>
              Currently pursuing B.Tech at Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded with a CGPA of 6.11. Completed HSC from Shri Shivaji College (63.23%) and SSC from Bhartiya Bal Vidhya Mandir (80.40%).
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;