import React from "react";
import Header from "../Header/Header";
import CreateTask from "../Header/CreateTask";
import AllTasks from "../Header/AllTasks";

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <CreateTask />
      <AllTasks />
    
    </div>
  );
};

export default AdminDashboard;
