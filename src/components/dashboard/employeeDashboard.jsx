import React from 'react'
import Header from '../Header/Header'
import TaskListNumbers from '../Header/TaskListNumbers'
import Tasklist from '../taskList/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header />
        <TaskListNumbers />
        <Tasklist />


    </div>
  )
}

export default EmployeeDashboard