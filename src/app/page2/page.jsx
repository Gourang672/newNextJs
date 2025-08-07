import Image from "next/image";

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

const Page = () => {
  return (
    <>
      {/* Hero Section */}
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

      {/* You Might Also Like */}
      <div className="text-center my-10 text-xl sm:text-2xl font-bold text-[#004274]">
        You Might Also Like
      </div>

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

      {/* Main Article + Related Posts */}
      <div className="my-10 px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Article */}
        <div className="lg:col-span-2 space-y-6">
          <div className="w-full relative h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image src="/images/17167.jpg" alt="Reading" fill className="object-cover" priority />
          </div>

          <p className="text-base text-gray-700">
            The traditional 9-to-5 workday, a relic of the industrial era, is increasingly being questioned in our modern knowledge economy...
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-[#004274]">The Origins of the 9-to-5 Schedule</h2>
          <p className="text-base text-gray-700">
            The concept of the 8-hour workday was popularized during the Industrial Revolution...
          </p>

          <blockquote className="italic text-sm text-blue-900 border-l-4 pl-4 border-blue-500">
            “The future of work isn’t about when you work, but what you accomplish. The 9-to-5 is an outdated concept that belongs in the last century.”
          </blockquote>

          {/* New Content from Screenshot */}
          <h2 className="text-lg sm:text-xl font-bold text-[#004274] mt-6">Alternative Work Models</h2>
          <p className="text-base text-gray-700">
            Forward-thinking companies are experimenting with various alternatives...
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-1">
            <li><b>Flexible Scheduling:</b> Allowing employees to choose their hours...</li>
            <li><b>Results-Only Work Environment (ROWE):</b> Employees are evaluated on output...</li>
            <li><b>4-Day Workweek:</b> Compressing the standard 40 hours...</li>
            <li><b>Remote-First Policies:</b> Giving employees location independence</li>
            <li><b>Asynchronous Work:</b> Teams collaborate without requiring simultaneous availability</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#004274] mt-6">The Benefits of Flexibility</h2>
          <p className="text-base text-gray-700">
            Research has shown that flexible work arrangements offer numerous advantages:
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-1">
            <li>Increased productivity and focus</li>
            <li>Improved work-life balance</li>
            <li>Reduced stress and burnout</li>
            <li>Higher retention rates and talent attraction</li>
            <li>Better accommodation of diverse lifestyles</li>
          </ul>

          <p className="text-base text-gray-700">
            As we continue to evolve our understanding of work and productivity...
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["#FutureOfWork", "#Productivity", "#WorkplaceInnovation", "#FlexibleWork"].map((tag) => (
              <span key={tag} className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Related Posts */}
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
      </div>

      {/* Footer */}
      <footer className="bg-[#1e293b] text-white text-center px-4 py-10 mt-10">
        <h3 className="text-lg font-semibold mb-2">Stay Updated With Our Latest Insights</h3>
        <p className="text-sm text-gray-300 mb-6">
          Subscribe to our newsletter to receive thoughtful articles on productivity, work culture, and more.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto">
          <input
  type="email"
  placeholder="Your email address"
  className="border border-slate-400 px-4 py-2 w-full sm:w-auto text-slate-400 placeholder:font-bold placeholder:text-lg text-lg focus:border-indigo-700 rounded-lg"
/>
          <button className="bg-[#004174] hover:bg-white hover:text-[#004174] text-white px-6 py-2 rounded">
            Subscribe
          </button>
        </form>
      </footer>
    </>
  );
};

export default Page;
