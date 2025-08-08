import React from 'react'

const Pagination = () => {
  return (
    <>
   <div className="flex justify-center text-lg">
                <div className="rounded-l-lg font-bold bg-slate-200 text-slate-400 p-4">Previous</div>
                <div className="font-bold bg-[#0A6FFD] text-white p-4">1</div>
                <div className="font-bold p-4 text-[#0a6ffd] border-1 border-slate-300">2</div>
                <div className="font-bold p-4 text-[#0a6ffd] border-1 border-slate-300">3</div>
                <div className="font-bold p-4 text-[#0a6ffd] border-1 border-slate-300 rounded-r-lg">Next</div>
              </div>
              </>
  )
}

export default Pagination;
