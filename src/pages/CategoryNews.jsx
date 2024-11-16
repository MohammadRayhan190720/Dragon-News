import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const {data : news} = useLoaderData()
  // console.log(news);
  return (
    <div>
      <h2 className="text-lg font-semibold">Dragon News Home </h2>
      <p className="text-center my-3 font-mono underline-offset-2 underline">{news.length} Category Data is Loading in this category</p>

      <div>
        {
          news.map((singleNews)=> <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;