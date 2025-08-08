import React from 'react'
import Image from "next/image";

const FeaturedArticleCard = () => {
    const articles = [
  // Featured Articles
  {
    section: "featured",
    image: "/images/building-lake.jpg",
    category: "Productivity",
    title: "Rethinking the 9-to-5 Work Structure",
    description: "How alternative work schedules can boost productivity and wellbeing.",
    date: "May 12, 2023",
  },
  {
    section: "featured",
    image: "/images/yoga-group-enjoying-outdoor-workout.jpg",
    category: "Technology",
    title: "The Ethics of AI Content Generation",
    description: "Exploring the implications of AI that can write, paint, and compose music.",
    date: "June 2, 2023",
  },
  {
    section: "featured",
    image: "/images/colorful-fruits-tasty-fresh-ripe-juicy-white-desk.jpg",
    category: "Wellness",
    title: "Digital Minimalism in a Connected World",
    description: "Practical strategies for reducing screen time without feeling left out.",
    date: "June 8, 2023",
  },
];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles
        .filter((item) => item.section === "featured")
        .map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg overflow-hidden bg-white flex flex-col"
          >
            <div className="h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="px-4 py-3 flex flex-col flex-1">
              <button className="font-bold text-white bg-sky-800 px-3 py-1 rounded-lg mb-2 hover:bg-sky-950 w-fit text-sm">
                {item.category}
              </button>
              <h4 className="text-sky-800 font-semibold text-base sm:text-lg mb-1">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm sm:text-base flex-1">
                {item.description}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                {item.date}
              </p>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default FeaturedArticleCard
