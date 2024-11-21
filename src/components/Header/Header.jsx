import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between mx-10'>
        <h1 className='text-2xl text-white font-medium'>Hello, <br /> <span className='text-3xl'>User 👋</span> </h1>
        <button className='text-white bg-red-600 px-5 py-2 rounded-md font-medium text-md'>Logout</button>
    </div>
  )
}

export default Header