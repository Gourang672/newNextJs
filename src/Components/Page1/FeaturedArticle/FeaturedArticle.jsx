import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FeaturedArticle = () => {
  return (
    <>
      <div className="flex justify-between items-center my-10 flex-wrap gap-3">
      <div className="text-sky-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Featured Articles
      </div>
      <div className="text-blue-500 font-bold hover:text-indigo-900 cursor-pointer">
        View all <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
    </>
  )
}

export default FeaturedArticle
