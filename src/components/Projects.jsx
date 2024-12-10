import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A fully responsive portfolio website showcasing skills, projects, and personal achievements. Built with React.js and modern UI design principles.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'To-Do List App',
      description: 'Task management application with CRUD functionality, enabling users to create, edit, delete, and mark tasks as complete.',
      tech: ['React.js', 'Local Storage', 'CSS'],
    },
  ];

  return (
    <div name='projects' className='w-full h-screen bg-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Projects</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-4'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'
            >
              <h3 className='text-2xl font-bold mb-4'>{project.title}</h3>
              <p className='text-gray-600 mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;