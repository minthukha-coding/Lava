import React from "react";
import Licon from "../../components/Licon";
import SlowTravelling from "../../components/SlowTravelling";
import LatestArticle from "../latestarticles";
import Sabscribe from "../sabscribe";
import Fotter from "../../components/Fotter";

function Home() {
  return (
    <>
      <div className="bg-center bg-cover bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2016/08/23/13/08/iceland-1614272_1280.jpg')] w-full h-full p-10">
        <div>
          <div className="flex items-center justify-between">
            <Licon />
            <div className="text-white">
              <a href="" className="mr-8 text-black">
                ABOUT
              </a>
              <a href="http://localhost:5173/latestArticles" className="text-black mr-8">
                ARTICLES
              </a>
              <a
                className="py-2 rounded-lg px-2 border-2"
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
          <div className="pt-[400px] pl-[120px] text-sky-100	">
            <h1 className=" tracking-[0.8rem] text-9xl font-black">Lava</h1>
            <h3 className="mt-3 ml-6 tracking-[0.3rem] text-black">
              BLACK SAND BEACH
            </h3>
          </div>
        </div>
        <SlowTravelling />
      </div>
      <LatestArticle/>
      <Sabscribe/>
      <Fotter/>
    </>
  );
}

export default Home;
