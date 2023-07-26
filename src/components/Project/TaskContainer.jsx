import React from 'react'
import Tasks from './Tasks'

const tasks = [
  {
      "IssueID": 1,
      "ProjectID": 1,
      "Title": "Implement Login Functionality",
      "Description": "Develop the login feature to allow users to authenticate.",
      "Priority": "High",
      "Status": "TO DO",
      "AssigneeID": 2,
      "ReporterID": 3,
      "CreatedDate": "2023-07-10",
      "UpdatedDate": "2023-07-11"
  },
  {
      "IssueID": 2,
      "ProjectID": 1,
      "Title": "Fix Bug in Registration Form",
      "Description": "Investigate and resolve the bug causing issues with user registration.",
      "Priority": "Medium",
      "Status": "COMPLETED",
      "AssigneeID": 4,
      "ReporterID": 3,
      "CreatedDate": "2023-07-09",
      "UpdatedDate": "2023-07-12"
  },
  {
      "IssueID": 3,
      "ProjectID": 2,
      "Title": "Update UI for Dashboard",
      "Description": "Revamp the user interface of the dashboard to improve user experience.",
      "Priority": "High",
      "Status": "IN PROGRESS",
      "AssigneeID": 5,
      "ReporterID": 4,
      "CreatedDate": "2023-07-11",
      "UpdatedDate": "2023-07-13"
  }
]

function TaskContainer({container_type}) {
  return (
    <div className='min-w-[300px] p-4 min-h-[200px] h-fit bg-[#f0f2f3] rounded-md'>
      <h1 className='text-xs font-medium text-slate-600   pb-3'>{container_type}</h1>
      {
        tasks.map((task , i)=>{
          if(task.Status === container_type){
            return(
              <Tasks task = {task} />
            )
          }
        })
      }
    </div>
  )
}

export default TaskContainer