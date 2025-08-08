import React from 'react'

const Categories = () => {
    const categories = [
  { name: "Technology", count: 24 },
  { name: "Productivity", count: 18 },
  { name: "Wellness", count: 15 },
  { name: "Culture", count: 12 },
  { name: "Design", count: 9 },
];

  return (
    <>
       <div className="shadow-lg rounded-lg py-4 px-5 lg:px-5 xl:px-20 pb-10">
              <h3 className="text-sky-800 font-bold text-2xl py-5">
                CATEGORIES
              </h3>
              {categories.map((item,index)=>(
              <div key={index}>
              <div className="flex gap-2 justify-between">
                <p className="pb-2 text-slate-700">{item.name}</p>
                <p className="text-sky-700 font-bold">{item.count}</p>
              </div>
              <div className="border-b-1 border-slate-300 mb-4"></div>

              </div>
              ))}
            </div>
    </>
  )
}

export default Categories
