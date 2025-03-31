import React from 'react';

const TechStackSection = () => {
  const skills = {
    Frontend: [
      { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'React.js', link: 'https://react.dev/' },
      { name: 'Next.js', link: 'https://nextjs.org/' },
      { name: 'Tailwind CSS', link: 'https://tailwindcss.com/' }
    ],
    Backend: [
      { name: 'Node.js', link: 'https://nodejs.org/' },
      { name: 'Express.js', link: 'https://expressjs.com/' }
    ],
    Database: [
      { name: 'MongoDB', link: 'https://www.mongodb.com/' }
    ],
    Tools: [
      { name: 'Git', link: 'https://git-scm.com/' },
      { name: 'GitHub', link: 'https://github.com/' },
      { name: 'Vercel', link: 'https://vercel.com/' }
    ]
  };

  return (
    <div className="mt-10 text-white w-full">
      <h2 className="text-2xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-gray-800 tracking-wide">Tech Stack</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="p-3">
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-gray-800 rounded-lg text-gray-300 text-sm hover:bg-gray-700 hover:text-white transition duration-300">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
