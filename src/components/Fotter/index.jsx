import React from "react";
import Licon from "../Licon/index"
function Fotter() {
  return (
    <>
      <div className="flex items-center justify-between bg-slate-700 p-10 h-[150px]">
      <div className="text-3xl font-bold text-white ">L</div>
        <div className="text-white">
          <a href="" className="mr-8">
            ABOUT
          </a>
          <a
            href="http://localhost:5173/latestArticles"
            className="mr-8"
          >
            ARTICLES
          </a>
          <a
            className="py-2 px-2"
            href="http://localhost:5173/sabscribe"
          >
            SABSCRIBE
          </a>
        </div>
        <svg
          className="sm:hidden"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </>
  );
}

export default Fotter;
