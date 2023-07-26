import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

function ProjectTable({projects}) {
  return (
    <table className="w-full mt-10">
        <thead>
          <tr className="border-b-2 border-slate-200 m-2 text-left text-text font-medium">
            <td width={"3%"}>
              <AiFillStar />
            </td>
            <td width={"30%"}>Name</td>
            <td width={"15%"}>Key</td>
            <td width={"20%"}>Type</td>
            <td rowSpan={2}>Lead</td>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, i) => {
            return (
              <tr
                className=" font-normal text-sm text-text border-b-[1px] border-slate-300 hover:bg-slate-200"
                key={i}
              >
                <td>
                  <AiOutlineStar className="text-lg" />
                </td>
                <td>{project.name}</td>
                <td>{project.key}</td>
                <td>{project.type}</td>
                <td>{project.lead}</td>
                <td className=" flex justify-end">
                  <BsThreeDots className="text-lg " />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  )
}

export default ProjectTable