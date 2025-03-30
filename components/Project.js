'use client';

import React from 'react';

const ProjectSection = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my work, skills, and contact information.',
      technologies: ['Next.js', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'An e-commerce web application with product listing, cart management, and secure checkout.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      link: '#'
    }
  ];

  return (
    <div className="mt-10 text-white w-full">
      <h2 className="text-2xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-gray-800 tracking-wide">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-4 hover:border-gray-700 hover:bg-gray-800 text-white transition duration-300 rounded-xl shadow-md hover:scale-[1.06] flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-2 text-xs">{project.description}</p>
              <p className="text-xs text-gray-400 mb-2">Technologies: {project.technologies.join(', ')}</p>
            </div>
            <div className="mt-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`} className="flex items-center gap-2 text-white ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
