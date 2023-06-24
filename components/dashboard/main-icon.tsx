"use client";

import Link from "next/link";

export default function MainIcon() {
  return (
    <div className="flex gap-4 h-full w-[30%] pl-4">
      <Link
        href={"/"}
        className="h-full w-10 text-2xl font-bold flex items-center mr-3"
      >
        DGU
      </Link>
      <div className="flex items-center relative max-w-[250px] w-full leading-6">
        <svg
          className="absolute left-4 fill-gray-600 w-4 h-4"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Tìm kiếm"
          type="search"
          className="w-full h-[40px] bg-gray-50 leading-6 py-4 pl-10 border-2 
          border-transparent rounded-xl outline-none transition-all ease-in-out duration-300 
          focus:outline-none focus:border-blue-300 focus:shadow-md focus:bg-white
          hover:outline-none hover:border-blue-300 hover:shadow-md hover:bg-white"
        ></input>
      </div>
    </div>
  );
}
