import React from 'react'

function SearchBar() {
  return (
      <div className="max-w-md mx-auto pt-6 sm:pt-8 px-4">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search aluminum tools, products, services..."
            className="pl-10 w-full rounded-md border border-gray-300 bg-white text-sm sm:text-base py-2"
          />
        </div>
      </div>
  )
}

export default SearchBar