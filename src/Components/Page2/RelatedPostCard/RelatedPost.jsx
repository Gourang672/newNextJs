import React from 'react'
import Image from "next/image";

const RelatedPost = () => {
    const relatedPosts = [
  {
    image: "/images/17167.jpg",
    title: "The Ethics of AI Content Generation",
    date: "June 2, 2023",
  },
  {
    image: "/images/17167.jpg",
    title: "The Ethics of AI Content Generation",
    date: "June 2, 2023",
  },
  {
    image: "/images/17167.jpg",
    title: "The Ethics of AI Content Generation",
    date: "June 2, 2023",
  },
  {
    image: "/images/17167.jpg",
    title: "The Ethics of AI Content Generation",
    date: "June 2, 2023",
  },
];
  return (
    <>
     <div>
          <h3 className="text-[#004274] text-base sm:text-lg font-bold mb-5">RELATED POSTS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {relatedPosts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row lg:flex-row items-start shadow-md rounded-lg bg-white overflow-hidden"
              >
                <div className="w-full sm:w-20 h-40 sm:h-20 relative shrink-0">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="pl-4 py-2">
                  <h4 className="text-sm font-semibold">{post.title}</h4>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div> 
    </>
  )
}

export default RelatedPost
