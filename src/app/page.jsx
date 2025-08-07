import Image from "next/image";

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
];

const categories = [
  { name: "Technology", count: 24 },
  { name: "Productivity", count: 18 },
  { name: "Wellness", count: 15 },
  { name: "Culture", count: 12 },
  { name: "Design", count: 9 },
];

const popularTags = ["#Innovation","#Mindfullness","#Sustainability","Future","#Work"];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-10 md:py-16 bg-sky-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="w-full lg:w-1/2 text-left mt-6 lg:mt-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#004274]">
                Thoughtful perspectives on modern life
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Discover insightful articles on technology, culture, and personal growth.
              </p>
              <button className="bg-[#004274] hover:bg-[#00315a] text-white px-6 py-2 rounded transition">
                Start Reading
              </button>
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

      {/* Featured Articles Section */}
      
<div className="mx-5 md:mx-10 xl:mx-20 mt-15">
  <div className="max-w-screen-xl mx-auto">
    {/* Header */}
    <div className="flex justify-between items-center my-10 flex-wrap gap-3">
      <div className="text-sky-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Featured Articles
      </div>
      <div className="text-blue-500 font-bold hover:text-indigo-900 cursor-pointer">
        View all
      </div>
    </div>

    {/* Responsive Grid */}
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
  </div>
</div>


      

      {/* Latest Articles Section */}
      <div className="bg-slate-100 px-5 lg:px-5 xl:px-20 mt-15 rounded">
        <div className="flex justify-between items-center my-10">
          <div className="sm:text-sm md:text-2xl lg:text-3xl xl:text-4xl text-sky-800 font-bold text-4xl pt-15 pb-6">
            Latest Articles
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Latest Articles List */}
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
              <div className="flex justify-center text-lg">
                <div className="rounded-l-lg font-bold bg-slate-200 text-slate-400 p-4">Previous</div>
                <div className="font-bold bg-[#0A6FFD] text-white p-4">1</div>
                <div className="font-bold p-4 text-[#0a6ffd] border-1 border-slate-300">2</div>
                <div className="font-bold p-4 text-[#0a6ffd] border-1 border-slate-300">3</div>
                <div className="font-bold p-4 text-[#0a6ffd] border-1 border-slate-300 rounded-r-lg">Next</div>
              </div>
          </div>


          {/* Categories Sidebar */}
          <div className="">
            <div className="shadow-lg rounded-lg py-4 px-5 lg:px-5 xl:px-20 pb-10">
              <h3 className="text-sky-800 font-bold text-2xl py-5">
                CATEGORIES
              </h3>
              {categories.map((item,index)=>(
              <div key={index}>
              <div className="flex gap-2 justify-between">
                <p className="pb-2 text-slate-700">{item.name}</p>
                <p className="text-sky-700 font-bold">{item.count}</p>
              </div>
              <div className="border-b-1 border-slate-300 mb-4"></div>

              </div>
              ))}
            </div>

            {/* popular tags sidebar */}
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

            {/* news letter start */}
            <div className="bg-[#1e293b] shadow-lg rounded-lg py-4 mt-4 px-5 lg:px-5 xl:px-5 pb-7 flex flex-col mb-10">
              <h1 className="font-bold text-2xl py-5 mb-5 text-[#004174]">
                NEWSLETTER
              </h1>
               <p className="font-bold text-white text-lg mb-10">Get the latest articles delivered to your inbox.</p>
               <input placeholder="Your email" className="mb-7 outline-none border-1 text-slate-400 placeholder:font-bold placeholder:text-xl text-xl border-slate-400 focus:border-indigo-700 rounded-lg p-4" />
               <button className="text-white bg-[#004174] cursor-pointer border-1 hover:bg-white text-xl hover:text-[#004174] font-bold outline-none border-none rounded-lg p-2">
                Subscribe
               </button>
            </div>

          </div>
          {/* sidebar end */}
        </div>
         {/* latest article grid end */}
      </div>
      {/* Latest Articles Section end */}
    </>
  );
}
