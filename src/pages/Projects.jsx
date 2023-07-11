import React from "react";
import ProjectTable from "../components/Projects/ProjectTable";
import CreateProject from "../components/Projects/CreateProject";

const projects = [
  {
    name: "Project X",
    key: "PRJX",
    type: "Type A",
    lead: "John Doe",
  },
  {
    name: "Project Y",
    key: "PRJY",
    type: "Type B",
    lead: "Jane Smith",
  },
  {
    name: "Project Z",
    key: "PRJZ",
    type: "Type C",
    lead: "Alex Johnson",
  },
];

function Projects() {
  return (
    <div className="p-6 px-8 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium">Projects</h1>
        <CreateProject/>
      </div>
      <ProjectTable projects = {projects} />
    </div>
  );
}

export default Projects;
