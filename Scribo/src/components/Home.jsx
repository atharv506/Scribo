import React, { useState } from 'react';

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111827] px-10">
      {/* Header Section */}
      <div className="mt-6 ml-20 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0">
        <h1 className="font-bold text-[22px] text-[#F9FAFB]">My Notes</h1>
        <p className="text-[#9CA3AF] mt-1">
          Welcome to Scribo, your personal note-taking app.
        </p>
      </div>

      {/* Search Bar & Buttons */}
      <div className="flex flex-wrap items-center gap-4 mt-6 mb-5">
        {/* Search Bar */}
        <form className="flex-grow max-w-5xl relative">
          <label htmlFor="default-search" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-[#9CA3AF]" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-[#F9FAFB] border border-[#374151] rounded-lg bg-[#111827] focus:ring-[#3B82F6] focus:border-[#3B82F6] placeholder:text-[#9CA3AF]"
              placeholder="Search your notes..."
              required
            />

          </div>
        </form>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white bg-[#3B82F6] hover:bg-[#60A5FA] focus:ring-4 focus:outline-none focus:ring-[#60A5FA]/50 font-bold rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
          >
            Dropdown button
            <svg className="w-2.5 h-2.5 ml-2" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 z-10 bg-[#1F2937] divide-y divide-[#374151] rounded-lg shadow w-44">
              <ul className="py-2 text-sm text-[#F9FAFB]">
                <li><a href="#" className="block px-4 py-2 hover:bg-[#374151]">Dashboard</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-[#374151]">Settings</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-[#374151]">Earnings</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-[#374151]">Sign out</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* Default Button */}
        <button
          type="button"
            className="text-white font-bold bg-[#3B82F6] hover:bg-[#60A5FA] focus:ring-4 focus:ring-[#60A5FA]/50  rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        
        >
            + New Note
        </button>
      </div>
    </div>
  );
};

export default Home;