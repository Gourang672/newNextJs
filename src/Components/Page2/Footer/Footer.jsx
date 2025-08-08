import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1e293b] text-white text-center px-4 py-10 mt-10">
        <h3 className="text-lg font-semibold mb-2">Stay Updated With Our Latest Insights</h3>
        <p className="text-sm text-gray-300 mb-6">
          Subscribe to our newsletter to receive thoughtful articles on productivity, work culture, and more.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto">
          <input
  type="email"
  placeholder="Your email address"
  className="border border-slate-400 px-4 py-2 w-full sm:w-auto text-slate-400 placeholder:font-bold placeholder:text-lg text-lg focus:border-indigo-700 rounded-lg"
/>
          <button className="bg-[#004174] hover:bg-white hover:text-[#004174] text-white px-6 py-2 rounded">
            Subscribe
          </button>
        </form>
      </footer>
    </>
  )
}

export default Footer
