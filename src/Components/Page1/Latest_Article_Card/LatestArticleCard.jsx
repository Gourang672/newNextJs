import React from 'react'
import Image from "next/image";
import Pagination from '../Pagination/Pagination';

const LatestArticleCard = () => {
    
    const articles = [
        // Latest Articles
  {
    section: "latest",
    image: "/images/building-lake.jpg",
    category: "Urban Design",
    title: "The Future of Sustainable Cities",
    description:
      "How urban planners are integrating green spaces and ecofriendly infrastructure in major metropolitan areas.",
    date: "June 15, 2023",
  },
  {
    section: "latest",
    image: "/images/yoga-group-enjoying-outdoor-workout.jpg",
    category: "Literature",
    title: "Why We Still Need Physical Books",
    description:
      "The cognitive and emotional benefits of reading printed material in the digital age.",
    date: "June 14, 2023",
  },
  {
    section: "latest",
    image: "/images/colorful-fruits-tasty-fresh-ripe-juicy-white-desk.jpg",
    category: "Nutrition",
    title: "The Science of Mindful Eating",
    description:
      "How paying attention to your meals can transform your relationship with food.",
    date: "June 12, 2023",
  },
    ]
  return (
    <>
      
     <div className="col-span-2">
            {articles
              .filter((item) => item.section === "latest")
              .map((item, index) => (
                <div
                  key={index}
                  className="shadow-lg rounded-lg mb-7 bg-white overflow-hidden mx-auto w-full"
                >
                  <div className="flex sm:flex-row flex-col">
                    <div className="w-full sm:w-1/3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={50}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <div className="px-5 md:h-1/2 sm:w-2/3">
                      <button className="font-bold cursor-pointer text-white bg-sky-800 my-5 px-3 py-1 rounded-lg hover:bg-sky-950">
                        {item.category}
                      </button>
                      <h4 className="text-sky-800 text-lg sm:text-xl font-bold">{item.title}</h4>
                      <p className="text-slate-500 py-2">{item.description}</p>
                      <p className="text-slate-500 pt-10 pb-2">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}

              <Pagination />
          </div>
    </>
  )
}

export default LatestArticleCard
