import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '75%' },
    { name: 'Python', level: '70%' },
    { name: 'Java', level: '65%' },
    { name: 'C++', level: '75%' },
    { name: 'MySQL', level: '70%' },
  ];

  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-b from-white to-blue-50'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-blue-600 inline'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-lg p-4 shadow-md hover:scale-105 duration-500'
            >
              <p className='font-bold mb-2'>{skill.name}</p>
              <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div
                  className='bg-blue-600 h-2.5 rounded-full'
                  style={{ width: skill.level }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;