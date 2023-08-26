import React from "react";

export default function SearchHeader() {
  return (
    <div className=" py-20 bg-slate-300">
      <div className="flex items-center justify-center gap-x-6">
        <input
          type="text"
          placeholder="Search for a service"
          className="w-96 h-14 px-4 py-2 text-lg text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
        <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Search
        </button>
      </div>
    </div>
  );
}
