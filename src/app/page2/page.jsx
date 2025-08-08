import Hero from "@/Components/Page2/Hero/Hero";
import MightAlsoLikeCard from "@/Components/Page2/MightAlsolike_Card/MightAlsoLikeCard";
import MightAlsoLikeHead from "@/Components/Page2/Mightalso_Like_Head/MightAlsoLikeHead";
import Article from "@/Components/Page2/Article/Article";
import RelatedPost from "@/Components/Page2/RelatedPostCard/RelatedPost";
import Footer from "@/Components/Page2/Footer/Footer";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* You Might Also Like */}
      <MightAlsoLikeHead />

      <MightAlsoLikeCard />

      {/* Main Article + Related Posts */}
      <div className="my-10 px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Article */}
        <Article />

        {/* Right Column: Related Posts */}
        <RelatedPost />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;
