import React from "react";

function Sabscribe() {
  return (
    <>
      <div className="text-center bg-slate-800 text-white p-10">
        <h1 className="text-5xl font-bold">Sabscribe</h1>
        <h5 className="pb-5 pt-5 -tracking-tight">SING-UP TO OUR NEWLETTERS</h5>
        <input
          type="text"
          placeholder="Your email"
          className="bg-slate-800 border-2 border-black w-[400px] mb-5 p-[10px] rounded-md"
        />
        <br />
        <button className="px-10 py-2 border-2 rounded-sm ">SABMIT</button>
      </div>
    </>
  );
}

export default Sabscribe;
