import React from 'react'

const PopularTags = () => {
    const popularTags = ["#Innovation","#Mindfullness","#Sustainability","Future","#Work"];
  return (
    <>
      <div className="shadow-lg rounded-lg py-4 px-5 lg:px-5 xl:px-20 pb-10">
              <h3 className="text-sky-800 font-bold text-2xl py-5">
                POPULAR TAGS
              </h3>
              <div className="flex flex-wrap gap-4">
              {popularTags.map((item,index)=>(
              <div key={index}>
                <div className="p-2 border-1 rounded-lg text-slate-400 cursor-pointer hover:bg-slate-200">{item}</div>
              </div>
              ))}
            </div>
            </div>
    </>
  )
}

export default PopularTags
