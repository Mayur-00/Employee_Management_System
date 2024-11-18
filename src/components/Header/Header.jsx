import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between '>
        <h1 className='text-2xl text-white font-medium'>Hello, <br /> <span className='text-3xl'>User 👋</span> </h1>
        <button className='text-white bg-red-600 px-5 py-2 rounded-md font-medium text-md'>LogOut</button>
    </div>
  )
}

export default Header