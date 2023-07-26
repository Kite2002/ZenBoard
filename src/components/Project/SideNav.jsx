import React from "react";
import { FaBookOpenReader, FaBorderAll, FaNewspaper, FaSolarPanel } from "react-icons/fa6";

function SideNav() {
  return (
  <div className="  min-w-[250px] border-t-2 border-r-2 border-slate-200 px-2 min-h-full">
    <div className=" mt-4 flex items-center gap-3 p-4">
      <FaNewspaper className="text-primary text-3xl" />
      <div className="flex flex-col">
        <h3 className=" font-semibold text-text">Productivity App</h3>
        <span className=" text-sm text-slate-400 font-medium">Software project</span>
      </div>
    </div>
    <div className="mt-5">
      <h4 className="px-4 font-bold text-sm  text-text">Planning</h4>
      <div className="mt-1">
        <div className="flex items-center gap-2 px-4 rounded-md font py-3 text-text hover:bg-indigo-100 w-full">
          < FaBorderAll className="text-2xl" />
          <span className="text-sm">Task Board</span>
        </div>
      </div>
    </div>
  </div>
  )
  
}

export default SideNav;
