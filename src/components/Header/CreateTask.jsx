import React from 'react'

const CreateTask = () => {
  return (
    <div className="flex justify-center mt-10">
    <form className="flex w-[95%] flex-wrap bg-zinc-800 items-start justify-between text-white p-10 rounded-md">
      <div className="w-1/2">
        <div>
          <h3 className="text-sm text-grey-700 mb-0.5">Task Title</h3>
          <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Enter Task Title Here.." />
        </div>
        <div>
          <h3 className="text-sm text-grey-700 mb-0.5">Date</h3>
          <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="date" />
        </div>
        <div>
          <h3 className="text-sm text-grey-700 mb-0.5">Assign To</h3>
          <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Employee Name" />
        </div>
        <div>
          <h3 className="text-sm text-grey-700 mb-0.5">Category</h3>
          <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Design, Dev etc." />
        </div>
      </div>

      <div className="w-1/2  flex flex-col items-start">
        <h3 className="text-sm text-grey-700 mb-0.5">Description</h3>
        <textarea className="w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400 resize-none"  name="" id="" cols={30} rows={10}></textarea>
        <button className="bg-emerald-500 py-3  hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
      </div>
    </form>
  </div>
  )
}

export default CreateTask