import { useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/dashboard/employeeDashboard'
import AdminDashboard from './components/dashboard/adminDashboard'

function App() {

  return (
    <>
    {/* <Login /> */}
    {/* <EmployeeDashboard /> */}
    <AdminDashboard />
    </>
  )
}

export default App
