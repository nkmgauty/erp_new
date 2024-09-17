import React from "react";
import erpimg from "../assets/Images/ERP_img.jpg"


function Login() {
  return (
    <>
<div className="flex flex-row bg-blue-400 h-screen p-8">
<div className="flex bg-slate-200 shadow-xl rounded-lg overflow-hidden w-full justify-evenly m-12 p-14">
    <div className="p-12">
        <img src={erpimg} className="h-80 w-80 object-cover opacity-100 transition-opacity duration-300 hover:opacity-80"></img>
    </div>
    <div className="p-20 justify-evenly ">
    <h2 className="text-2xl font-semibold text-black-700 text-center mb-4">
            Login
          </h2>
   <form className="flex flex-col ">
    <div className="mb-4">
    <label className="block text-black-700 mb-1">Email</label>
    <input type="email" placeholder=" Email" className="w-full border rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    </input> </div>
    <div className="mb-4">
    <label className="block text-black-700 mb-1">Password</label>
    <input type="Password" placeholder=" Password" className="w-full border rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500">
    </input> </div>
    <button className="bg-green-500 border rounded-lg p-1 hover:bg-green-300">Login</button>
   </form>
</div>
</div>
</div>

{/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
       
        <div className="w-1/2 flex justify-center items-center bg-blue-500 p-8">
          <img
            src="https://via.placeholder.com/150"

            alt="Logo"
            className="h-32 w-32 object-cover"
          />
        </div>

        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default Login;
