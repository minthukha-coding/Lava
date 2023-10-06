import React from "react";
import RecentCard from "../../components/RecentCard";
import { render } from "react-dom";

function LatestArticle() {
  return (
    <>
      <div className="bg-slate-700 pb-20 h-[774px]">
        <div className="text-center pt-10">
          <h1 className="text-4xl font-bold">Latest articles</h1>
          <h5 className="flex justify-center">OUR MOST RECENT POSTS</h5>
        </div>
        <div className="flex mt-[10px] justify-between mx-20 p-20">
          <RecentCard />
        </div>
      </div>
    </>
  );
}

export default LatestArticle;
