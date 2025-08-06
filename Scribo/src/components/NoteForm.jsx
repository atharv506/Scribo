import { useState } from 'react';

export default function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddNote({ title, content });
      setTitle('');
      setContent('');
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1F2937] p-4 rounded-lg shadow w-full mb-4">
      <h2 className="text-[#F9FAFB] font-semibold mb-2 text-lg">New Note</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full mb-3 p-2 rounded bg-[#111827] text-[#F9FAFB] border border-[#374151] placeholder:text-[#9CA3AF] focus:ring-[#3B82F6] focus:border-[#3B82F6]"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
<div className="relative mb-3">
  <button
    onClick={toggleDropdown}
    type="button"
    className="w-full p-2 rounded bg-[#111827] text-[#F9FAFB] border border-[#374151] focus:ring-[#3B82F6] focus:border-[#3B82F6] flex justify-between items-center"
  >
    Dropdown button
    <svg
      className="w-2.5 h-2.5 ml-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  {isDropdownOpen && (
    <div className="absolute top-full left-0 w-full z-10 mt-1 bg-[#111827] text-[#F9FAFB] border border-[#374151] rounded shadow">
      <ul className="py-2 text-sm">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-[#1F2937]">Dashboard</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-[#1F2937]">Settings</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-[#1F2937]">Earnings</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-[#1F2937]">Sign out</a>
        </li>
      </ul>
    </div>
  )}
</div>


      <textarea
        placeholder="Content"
        className="w-full p-2 rounded bg-[#111827] text-[#F9FAFB] border border-[#374151] placeholder:text-[#9CA3AF] focus:ring-[#3B82F6] focus:border-[#3B82F6]"
        rows="4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>

      <div className="w-full flex gap-4 mt-3">
        <button
          type="submit"
          className="w-1/2 px-4 py-2 bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1F2937] focus:ring-white"
        >
          Add Note
        </button>
        <button
          type="button"
          className="w-1/2 px-4 py-2 bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1F2937] focus:ring-white"
        >
          Go Back
        </button>
      </div>
    </form>
  );
}
