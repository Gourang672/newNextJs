import React from 'react'

const ArticleTags = () => {
  return (
    <>
       <div className="flex flex-wrap gap-2 mt-4">
                  {["#FutureOfWork", "#Productivity", "#WorkplaceInnovation", "#FlexibleWork"].map((tag) => (
                    <span key={tag} className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
    </>
  )
}

export default ArticleTags
