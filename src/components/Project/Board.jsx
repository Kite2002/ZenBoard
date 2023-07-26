import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import TaskContainer from "./TaskContainer";

const containers = ["TO DO", "IN PROGRESS", "COMPLETED"];

function Board() {
  return (
    <div className="p-6 py-7 flex-1  overflow-hidden h-full">
      <div className="flex flex-col gap-3 max-w-full h-[95%]">
        <span className="text-slate-500 text-sm">
          Projects / Productivity App
        </span>
        <h1  className=" font-semibold text-3xl py-2">
          Board
        </h1>

        <div className="flex gap-3 w-full">
          <div className="flex items-center">
            <input
              type="text"
              className="bg-transparent border-2 border-slate-400 p-1 rounded-md focus:outline-primary hover:bg-slate-200 focus:bg-white"
              name=""
              id=""
            />
            <FaSearch className=" ml-[-25px]  text-xs text-text" />
          </div>
          <div className=" text-sm flex justify-center items-center w-9 bg-green-600 text-white rounded-full aspect-square p-1 ml-[25px]">
            D
          </div>
          <div className="bg-slate-200 text-text text-lg rounded-full w-9 h-9  flex justify-center items-center hover:bg-slate-300">
            <BsPersonFillAdd />
          </div>
        </div>
        <div className="flex gap-4 mt-3 overflow-auto h-full">
          {containers.map((container, i) => (
            <TaskContainer key={i} container_type={container} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
