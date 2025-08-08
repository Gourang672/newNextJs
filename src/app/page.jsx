import ArticleHero from "@/Components/Page1/ArticleHero/ArticleHero";
import Newsletter from "@/Components/Page1/Newsletter/Newsletter";
import FeaturedArticle from "@/Components/Page1/FeaturedArticle/FeaturedArticle";
import LatestArticle from "@/Components/Page1/Latest_Article/LatestArticle";
import Categories from "@/Components/Page1/Categories/Categories";
import PopularTags from "@/Components/Page1/PopularTags/PopularTags";
import FeaturedArticleCard from "@/Components/Page1/Featured_Article_Card/FeaturedArticleCard";
import LatestArticleCard from "@/Components/Page1/Latest_Article_Card/LatestArticleCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <ArticleHero />

      {/* Featured Articles Section */}

      <div className="mx-5 md:mx-10 xl:mx-20 mt-15">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <FeaturedArticle />

          {/* Responsive Grid */}
          <FeaturedArticleCard />
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="bg-slate-100 px-5 lg:px-5 xl:px-20 mt-15 rounded">
        <LatestArticle />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Latest Articles List */}
          <LatestArticleCard />

          {/* Categories Sidebar */}
          <div className="">
            <Categories />

            {/* popular tags sidebar */}
            <PopularTags />

            {/* news letter start */}
            <Newsletter />
          </div>
          {/* sidebar end */}
        </div>
        {/* latest article grid end */}
      </div>
      {/* Latest Articles Section end */}
    </>
  );
}
