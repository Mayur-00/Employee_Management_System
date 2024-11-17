import React from 'react'

const Login = () => {
  return (
    <div className='h-screen bg-zinc-900 w-screen flex justify-center items-center'>
        <div className='border-2 border-red-200'>
            <form className='flex flex-col'>
                <input type="email" placeholder='Enter Your Email..' />
                <input type="password" placeholder='Enter Password Here..' />
            </form>
        </div>
    </div>
  )
}

export default Login