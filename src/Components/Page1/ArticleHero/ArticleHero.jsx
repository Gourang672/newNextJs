import React from 'react'
import Image from "next/image";
import ArticleHeroPara from '../Article_Hero_Para/ArticleHeroPara'
import ArtcleHeroButton from '../Article_Hero_Button/ArtcleHeroButton'
import ArtcleHeroHeading from '../Article_Hero_Heading/ArtcleHeroHeading'

const ArticleHero = () => {
  return (
    <>
      <section className="py-10 md:py-16 bg-sky-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="w-full lg:w-1/2 text-left mt-6 lg:mt-0">
             <ArtcleHeroHeading />
              <ArticleHeroPara />
              <ArtcleHeroButton/>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/building-lake.jpg"
                alt="Reading"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ArticleHero
