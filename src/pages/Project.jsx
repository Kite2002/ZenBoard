import React from 'react'
import SideNav from '../components/Project/SideNav'
import Board from '../components/Project/Board'

function Project() {
  return (
    <div className=' flex gap-4 h-full max-w-screen overflow-hidden'>
      <SideNav/>
      <Board/>
    </div>
  )
}

export default Project