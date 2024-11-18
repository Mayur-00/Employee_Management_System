import React,{useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandeler =(e) =>{
    e.preventDefault()

    console.log("hello User, Form Submited")

  }
  return (
    <div className='h-screen bg-zinc-900 w-screen flex justify-center items-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl '>
            <form onSubmit={(e)=>{submitHandeler(e)}} className='flex flex-col justify-center items-center'>
                <input required value={email} onChange={(e)=> setEmail(e.target.value)} className='bg-transparent border-2 border-emerald-600 rounded-full px-5 py-4 text-md font-semibold outline-none text-white placeholder:text-grey-400' type="email" placeholder='Enter Your Email..' />
                <input required value={password} onChange={(e) => setPassword(e.target.value)} className='bg-transparent border-2 border-emerald-600 rounded-full px-5 py-4 text-md font-semibold outline-none text-white placeholder:text-grey-400 mt-3' type="password" placeholder='Enter Password Here..' />
                <button className='bg-transparent bg-emerald-600 rounded-full w-20 h-10 text-xl outline-none text-white mt-5' >LogIn</button>
            </form>
        </div>  
    </div>
  )
}

export default Login