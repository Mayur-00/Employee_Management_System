import React from 'react'

const Tasklist = () => {
  return (
    <div id='tasklist' className='h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-20 rounded-md overflow-x-auto'>
        <div className='flex-shrink-0 flex-col p-5 flex h-full w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>18-nov-2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold '>Make Ui of the Page</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis laborum dolorem accusantium.</p>
        </div>
        
    </div>
  )
}

export default Tasklist