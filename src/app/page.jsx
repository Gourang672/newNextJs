
export default function Home() {
  return (
    <>
      <div className=" bg-sky-100 flex flex-col-reverse justify-center items-center sm:flex-row sm:justify-around px-40 py-10 rounded">
        <div>
          <h1 className="2xl:leading-[85px] text-sky-800 font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl ">
            Thoughtful perspectives on modern life
          </h1>
          <p className="text-slate-500 text-[10px] sm:text-sm lg:text-lg xl:text-3xl mt-4">
            Discover insightful articles on technology, culture, and personal
            growth.
          </p>
          <button className="font-bold cursor-pointer text-[10px] sm:text-lg text-white bg-sky-800 mt-10 px-3 py-1 xl:px-4 xl:py-3 rounded-lg lg:rounded-lg hover:bg-sky-950">
            Start Reading
          </button>
        </div>

        <div>
          <img
            className="ml-4 mb-4 h-full md:block hidden sm:max-w-60 md:max-w-80 lg:max-w-95 xl:max-w-160 max-w-40 rounded-xl"
            src="../../images/17167.jpg"
          />
        </div>
      </div>

      <div className="mx:5 md:mx-40 mt-15">
        <div>
          <div className="flex justify-between items-center my-10">
            <div className="text-sky-800 font-bold sm:text-sm md:text-2xl lg:text-3xl xl:text-4xl">
              Featured Articles
            </div>
            <div className="text-blue-500 font-bold hover:text-indigo-900 cursor-pointer">
              View all
            </div>
          </div>

          <div className="flex justify-center md:justify-between gap-5 flex-col md:flex-row">
            <div className=" shadow-lg rounded-lg pb-2 overflow-hidden">
              <div className="">
                <img
                  className="w-full h-60"
                  src="../../images/building-lake.jpg"
                />
                <div className="px-5">
                  <button className="font-bold cursor-pointer text-white bg-sky-800 my-5 px-3 py-1 rounded-lg hover:bg-sky-950">
                    Productivity
                  </button>
                  <h4 className="text-sky-800 text-xl font-bold">
                    Rethinking the 9-to-5 Work Structure
                  </h4>
                  <p className="text-slate-500 py-2">
                    How alternative work schedules can boost productivity and
                    wellbeing.
                  </p>
                  <p className="text-slate-500 py-5">May 12, 2023</p>
                </div>
              </div>
            </div>

            <div className=" shadow-lg rounded-lg pb-2 overflow-hidden">
              <div className="">
                <img
                  className="w-full h-60"
                  src="../../images/yoga-group-enjoying-outdoor-workout.jpg"
                />
                <div className="px-5">
                  <button className="font-bold cursor-pointer text-white bg-sky-800 my-5 px-3 py-1 rounded-lg hover:bg-sky-950">
                    Technology
                  </button>
                  <h4 className="text-sky-800 text-xl font-bold">
                    The Ethics of Al Content Generation
                  </h4>
                  <p className="text-slate-500 py-2">
                    Exploring the implications of Al that can write, paint, and
                    compose music.
                  </p>
                  <p className="text-slate-500 py-5">May 12, 2023</p>
                </div>
              </div>
            </div>

            <div className=" shadow-lg rounded-lg pb-2 overflow-hidden">
              <div className="">
                <img
                  className="w-full h-60"
                  src="../../images/colorful-fruits-tasty-fresh-ripe-juicy-white-desk.jpg"
                />
                <div className="px-5">
                  <button className="font-bold cursor-pointer text-white bg-sky-800 my-5 px-3 py-1 rounded-lg hover:bg-sky-950">
                    Wellness
                  </button>
                  <h4 className="text-sky-800 text-xl font-bold">
                    Digital Minimalism in a Connected World
                  </h4>
                  <p className="text-slate-500 py-2">
                    Practical strategies for reducing screen time without
                    feeling left out.
                  </p>
                  <p className="text-slate-500 py-5">May 12, 2023</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-slate-100 px-40 mt-15 rounded">
        <div className="flex justify-between items-center my-10">
          <div className="sm:text-sm md:text-2xl lg:text-3xl xl:text-4xl text-sky-800 font-bold text-4xl pt-15 pb-6">
            Latest Articles
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div className="col-span-2">
            <div className=" shadow-lg rounded-lg mb-7 bg-white overflow-hidden">
              <div className="lg:flex block">
                <img
                  className="w-full h-full lg:w-90 lg:h-60"
                  src="../../images/building-lake.jpg"
                />
                <div className="px-5">
                  <button className="font-bold cursor-pointer text-white bg-sky-800 my-5 px-3 py-1 rounded-lg hover:bg-sky-950">
                    Urban Design
                  </button>
                  <h4 className="text-sky-800 text-xl font-bold">
                    The Future of Sustainable Cities
                  </h4>
                  <p className="text-slate-500 py-2">
                    How urban planners are integrating green spaces and
                    ecofriendly infrastructure in major metropolitan areas.
                  </p>
                  <p className="text-slate-500 pt-10 pb-2">May 12, 2023</p>
                </div>
              </div>
            </div>

            <div className=" shadow-lg rounded-lg mb-7 bg-white overflow-hidden">
              <div className="lg:flex block">
                <img
                  className="w-full h-full lg:w-90 lg:h-60"
                  src="../../images/yoga-group-enjoying-outdoor-workout.jpg"
                />
                <div className="px-5">
                  <button className="font-bold cursor-pointer text-white bg-sky-800 my-5 px-3 py-1 rounded-lg hover:bg-sky-950">
                    Literature
                  </button>
                  <h4 className="text-sky-800 text-xl font-bold">
                    Why We Still Need Physical Books
                  </h4>
                  <p className="text-slate-500 py-2">
                    The cognitive and emotional benefits of reading printed
                    material in the digital age.
                  </p>
                  <p className="text-slate-500 pt-10 pb-2">May 12, 2023</p>
                </div>
              </div>
            </div>

            <div className=" shadow-lg rounded-lg mb-7 bg-white overflow-hidden">
              <div className="lg:flex block">
                <img
                  className="w-full h-full lg:w-90 lg:h-60"
                  src="../../images/colorful-fruits-tasty-fresh-ripe-juicy-white-desk.jpg"
                />
                <div className="px-5">
                  <button className="font-bold cursor-pointer text-white bg-sky-800 my-5 px-3 py-1 rounded-lg hover:bg-sky-950">
                    Nutrition
                  </button>
                  <h4 className="text-sky-800 text-xl font-bold">
                    The Science of Mindful Eating
                  </h4>
                  <p className="text-slate-500 py-2">
                    How paying attention to your meals can transform your
                    relationship with food.
                  </p>
                  <p className="text-slate-500 pt-10 pb-2">May 12, 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
          <div className="shadow-lg rounded-lg py-4 px-7 pb-10">
          <h3 className="text-sky-800 font-bold text-2xl py-5">CATEGORIES</h3>
          <div className="flex gap-2 justify-between">
           <p className="pb-2 text-slate-700">Technology</p>
           <p className="text-sky-700 font-bold">24</p>
          </div>
          <div className="border-b-1 border-slate-300 mb-4"></div>

           <div className="flex gap-2 justify-between">
           <p className="pb-2 text-slate-700">Productivity</p>
           <p className="text-sky-700 font-bold">18</p>
          </div>
          <div className="border-b-1 border-slate-300 mb-4"></div>

           <div className="flex gap-2 justify-between">
           <p className="pb-2 text-slate-700">Wellness</p>
           <p className="text-sky-700 font-bold">15</p>
          </div>
          <div className="border-b-1 border-slate-300 mb-4"></div>

           <div className="flex gap-2 justify-between">
           <p className="pb-2 text-slate-700">Culture</p>
           <p className="text-sky-700 font-bold">12</p>
          </div>
          <div className="border-b-1 border-slate-300 mb-4"></div>

           <div className="flex gap-2 justify-between">
           <p className="pb-2 text-slate-700">Design</p>
           <p className="text-sky-700 font-bold">9</p>
          </div>      
          </div>

          </div>
        </div>
      </div>
    </>
  );
}
