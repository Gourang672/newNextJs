import React from 'react'
import Image from "next/image";

const MightAlsoLikeCard = () => {
    const youMightAlsoLikeCards = [
  {
    image: "/images/17167.jpg",
    category: "WELLNESS",
    title: "Digital Minimalism in a Connected World",
    date: "June 8, 2023",
  },
  {
    image: "/images/17167.jpg",
    category: "NUTRITION",
    title: "The Science of Mindful Eating",
    date: "June 12, 2023",
  },
  {
    image: "/images/17167.jpg",
    category: "URBAN DESIGN",
    title: "The Future of Sustainable Cities",
    date: "June 15, 2023",
  },
  {
    image: "/images/17167.jpg",
    category: "LITERATURE",
    title: "Why We Still Need Physical Books",
    date: "June 18, 2023",
  },
];
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-20">
        {youMightAlsoLikeCards.map((card, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="relative w-full h-52 sm:h-60 md:h-48 lg:h-40 xl:h-48">
              <Image src={card.image} alt={card.title} fill className="object-cover" priority />
            </div>
            <div className="p-4 text-left space-y-1">
              <p className="text-xs text-blue-900 font-bold">{card.category}</p>
              <h2 className="text-base font-semibold text-black">{card.title}</h2>
              <p className="text-sm text-slate-500">{card.date}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default MightAlsoLikeCard
