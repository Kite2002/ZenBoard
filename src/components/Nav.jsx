import React from "react";
import { SiZendesk } from "react-icons/si";

function Nav() {
  return (
    <div className="flex justify-between items-center py-3 px-5 border-b-[1px] shadow-md ">
      <div className=" flex items-center justify-center gap-8 ">
        <div className="flex items-center">
          <SiZendesk className="text-primary text-2xl" />
          <h1 className=" text-text text-xl">
            en<span className=" font-sans font-bold">Board</span>
          </h1>
        </div>
        <nav className=" flex text-base gap-3 text-text font-medium">
          <span>Tasks</span>
          <span>Projects</span>
          <span>Teams</span>
        </nav>
      </div>

      <div className="flex  gap-2">
        <input
          className=" p-1 border-2 border-slate-200 rounded-lg text-text text-sm"
          type="text"
          placeholder="Search"
        />
        <div className=" text-sm flex justify-center items-center w-8 bg-green-600 text-white rounded-full aspect-square p-1">
          D
        </div>
      </div>
    </div>
  );
}

export default Nav;
