import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex justify-between gap-5 ">
      <div className=" h-fit rounded-xl w-[45%] py-6 px-9 bg-blue-600 text-white">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" h-fit rounded-xl w-[45%] py-6 px-9 bg-red-600 text-white">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" h-fit rounded-xl w-[45%] py-6 px-9 bg-yellow-600 text-white">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" h-fit rounded-xl w-[45%] py-6 px-9 bg-emerald-600 text-white">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
