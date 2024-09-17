import React from 'react'
import Logo from "../assets/Images/Cobra_logo.png"
import Adminimg from "../assets/Images/Admin_img.png"

function Admin_login() {
  return (
    <>
  <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen items-center '>

<div className='pt-40 flex justify-center items-center  '>
    <div className='flex max-w-72  bg-slate-200 shadow-xl rounded-lg overflow-hidden w-full justify-evenly items-center flex-col'>
    <img src={Logo} className='h-12 w-22 p-2'></img>
    <h2 className="text-2xl font-semibold text-black-700 text-center mb-4 hover:text-green-400">
            Admin Login
          </h2>
   <form className="flex flex-col ">
    <div className="mb-4">
    <label className="block text-black-700 mb-1 max-w-7">Email</label>
    <input type="email" placeholder=" Email" required className="w-full max-w-60 border rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    </input> </div>
    <div className="mb-4">
    <label className="block text-black-700 mb-1 max-w-60 ">Password</label>
    <input type="Password" placeholder=" Password" required className="w-full max-w-60  border rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500">
    </input> </div>
    <div className='pb-2 pl-20'>
    <button type='submit' className="bg-green-500 border rounded-lg p-1 hover:bg-green-300 max-w-60 ">Login</button>
    </div>
   </form>
    </div>

</div>
  </div>
    
    </>
  )
}

export default Admin_login