'use client';

import React, { useState } from 'react';

const email = 'kamaldevgn@gmail.com';

const handleCopy = () => {
  navigator.clipboard.writeText(email);
  alert('Email copied to clipboard!');
};

export default function EmailSection() {
  const [hovered, setHovered] = useState('');

  return (
    <div className="mt-5 flex items-center gap-4">
      {/* Interactive SVGs */}
      <div className="flex gap-4" onMouseLeave={() => setHovered('')}>
        {/* Mail SVG */}
        <button
          onMouseEnter={() => setHovered('mail')}
          onClick={() => window.location.href = `mailto:${email}`}
          className="flex items-center gap-2 text-white"
        >
          <div className="p-2 rounded-xl border border-transparent hover:border-gray-700 hover:bg-gray-800 text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z" clipRule="evenodd" />
            </svg>
          </div>
        </button>

        {/* Copy SVG */}
        <button
          onMouseEnter={() => setHovered('copy')}
          onClick={handleCopy}
          className="flex items-center gap-2 text-white"
        >
          <div className="p-2 rounded-xl border border-transparent hover:border-gray-700 hover:bg-gray-800 text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z" clipRule="evenodd" />
            </svg>
          </div>
        </button>
      </div>

      {/* Text Section */}

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-white">Feel free to connect with me</span>
        <span className="text-xs text-gray-400">
          {hovered === 'mail' && 'Open inbox'}
          {hovered === 'copy' && 'Copy my email to clipboard'}
          {hovered === '' && 'Send me an email'}
        </span>
      </div>

      {/* <div className="flex flex-col">
        <span className="text-lg text-white">Feel free to connect with me</span>
        <span className="text-sm text-gray-400">Send me an email</span>
      </div> */}
    </div>
  );
}
