import React from "react";
import { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { FaMinus, FaNewspaper, FaXmark } from "react-icons/fa6";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateProject() {
  const [value, setValue] = useState("");
  const [creatorOpen, setCreatorOpen] = useState(false);
  const input_style =
    "w-full hover:bg-slate-200 bg-slate-100 border-2 border-slate-300 p-2 rounded-md focus:outline-primary focus:bg-white";
  const label_style = "text-slate-500 text-sm font-medium required";
  const button_style =
    "bg-primary px-3 py-2 text-white rounded-md hover:scale-105 hover:bg-indigo-600";

  return (
    <div className="">
      <button
        onClick={() => setCreatorOpen(!creatorOpen)}
        className="bg-primary px-3 py-2 text-white rounded-md hover:scale-105 hover:bg-indigo-600"
      >
        Create Project
      </button>
      <div
        className={` absolute bottom-8 rounded-md right-10 w-[500px] ${
          creatorOpen
            ? "h-[590px] shadow-lg border-[2px] border-slate-200 "
            : "h-[0px] shadow-none"
        } overflow-hidden transition-all ease-in  bg-background  `}
      >
        <div className="flex w-[95%] h-max m-auto p-4 pb-3 justify-between items-center text-text  gap-2 border-b-2  border-slate-200">
          <h5 className=" font-semibold text-text flex justify-center items-center gap-2">
            <FaNewspaper /> New Project
          </h5>
          <div className="flex text-xl  items-center">
            <button className="w-2xl rounded-full  aspect-square hover:bg-slate-200 p-2">
              <FaMinus />
            </button>
            <button className="w-2xl rounded-full  aspect-square hover:bg-slate-200 p-2">
              <AiOutlineExpandAlt />
            </button>
            <button className="w-2xl rounded-full  aspect-square hover:bg-slate-200 p-2">
              <FaXmark />
            </button>
          </div>
        </div>
        <form className=" overflow-y-scroll p-4 h-fit max-h-[450px]">
          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium required">
              Project Name
            </label>
            <input
              type="text"
              required
              className={input_style}
              placeholder="Enter Project Name"
            />
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <label className="text-slate-500  text-sm font-medium required">
              Type
            </label>
            <input
              type="text"
              required
              className={input_style}
              placeholder="Enter Type"
            />
          </div>

          <div className="flex gap-1">
            <div className="flex flex-col gap-2 mt-3 w-full">
              <label className="text-slate-500  text-sm font-medium required">
                Start Date
              </label>
              <input type="date" required className={input_style} />
            </div>
            <div className="flex flex-col gap-2 mt-3 w-full">
              <label className="text-slate-500  text-sm font-medium required">
                Estimated End
              </label>
              <input type="date" required className={input_style} />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3 w-full">
            <label className="text-slate-500  text-sm font-medium required">
              Description
            </label>
            <ReactQuill
              placeholder="@Start writing here"
              className=""
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </form>
        <div className="flex justify-between items-center p-4 border-t-2 w-[95%] m-auto">
          <label className="flex gap-2 justify-center items-center" htmlFor="">
            <input className=" scale-150" type="checkbox" name="" id="" />
            Open Project on creation
          </label>
          <button className={button_style}>Confirm Project</button>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
