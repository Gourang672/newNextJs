import React from 'react'

const Newsletter = () => {
  return (
    <>
      <div className="bg-[#1e293b] shadow-lg rounded-lg py-4 mt-4 px-5 lg:px-5 xl:px-5 pb-7 flex flex-col mb-10">
              <h1 className="font-bold text-2xl py-5 mb-5 text-[#004174]">
                NEWSLETTER
              </h1>
               <p className="font-bold text-white text-lg mb-10">Get the latest articles delivered to your inbox.</p>
               <input placeholder="Your email" className="mb-7 outline-none border-1 text-slate-400 placeholder:font-bold placeholder:text-xl text-xl border-slate-400 focus:border-indigo-700 rounded-lg p-4" />
               <button className="text-white bg-[#004174] cursor-pointer border-1 hover:bg-white text-xl hover:text-[#004174] font-bold outline-none border-none rounded-lg p-2">
                Subscribe
               </button>
            </div>
    </>
  )
}

export default Newsletter
