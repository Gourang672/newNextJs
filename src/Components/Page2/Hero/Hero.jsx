import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="py-10 md:py-16 bg-sky-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full lg:w-1/2 text-center">
              <p className="text-sm sm:text-base md:text-lg text-[#004274] font-bold mb-4">
                PRODUCTIVITY
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#004274]">
                Rethinking the Traditional 9-to-5 Work Structure for the Modern Age
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mb-6">
                May 12, 2023 • 8 min read
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
