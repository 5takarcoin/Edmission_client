'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-4">
      <div className="flex items-center justify-between py-4">
        <div className="text-2xl font-bold">Logo</div>

        <button
          className="lg:hidden focus:outline- z-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700 hover:text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className={`p-8 lg:flex lg:items-center lg:space-x-4 ${menuOpen ? 'flex-col absolute right-0 top-0 h-[400px] space-y-4 w-96' : 'hidden'}`}>
          <div className='flex items-center justify-center'><Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link></div>
          <div className='flex items-center justify-center'><Link href="/high-schools" className="text-gray-700 hover:text-gray-900">High Schools</Link></div>
          <div className='flex items-center justify-center'><Link href="/colleges" className="text-gray-700 hover:text-gray-900">Colleges</Link></div>
          <div className='flex items-center justify-center'><Link href="/universities" className="text-gray-700 hover:text-gray-900">Universities</Link></div>
          <div className='flex items-center justify-center'><Link href="/edjourney" className="text-gray-700 hover:text-gray-900">EdJourney</Link></div>
          <div className='flex items-center justify-center'><Link href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</Link></div>
        </div>
      </div>
    </div>
  );
}

