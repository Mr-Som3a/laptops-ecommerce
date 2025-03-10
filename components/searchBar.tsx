import React from "react";

function SearchBar() {
  return (
    <label className=" mx-4 w-[40%] flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>

      <input type="text" className="grow hidden sm:block border-[1px] border-slate-500 h-10 rounded px-1  " placeholder="Search" />
      
    </label>
  );
}

export default SearchBar;
