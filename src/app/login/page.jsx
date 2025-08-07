import React from 'react'

const page = () => {
  return (
    <>
     <div className='h-screen pt-20'>
        <div className='rounded shadow-lg flex mx-auto w-100 py-6 px-5 flex-col items-center'>
         <h1 className='text-4xl font-bold mt-5 mb-15'>Admin Login</h1>
            <input  placeholder='User Name' className='border-1 border-slate-200 w-full text-left focus:outline-violet-700 px-2 py-2 text-xl mb-5'/>
            <input placeholder='Password' className='border-1 border-slate-200 w-full text-left focus:outline-violet-700 px-2 py-2 text-xl mb-5' />
            <button className='bg-violet-700 text-white text-xl font-bold px-4 py-2 mt-5'>Submit</button>
            </div>
        </div> 
    </>
  )
}

export default page
