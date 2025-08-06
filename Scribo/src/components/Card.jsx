import { useState } from 'react';

export default function Card({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div
      onClick={toggleExpand}
      className="bg-[#1F2937] p-4 rounded-lg shadow text-white w-full max-w-md mb-4 cursor-pointer transition-all duration-300 hover:shadow-lg"
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className={`text-[#D1D5DB] transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
        {content}
      </p>
      {!isExpanded && (
        <span className="text-blue-400 text-sm mt-2 inline-block">Click to expand</span>
      )}
    </div>
  );
}
