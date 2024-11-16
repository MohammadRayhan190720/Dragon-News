import { FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function NewsCard(props = {}) {
  const {news} = props || {};
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img
            src={news.author.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold">{news.author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <h2 className="text-lg font-bold mb-2">{news.title}</h2>
        {/* Image display section */}
        <div className="w-full mb-4">
          <img
            src={news.image_url}
            alt="News"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          {news.details.substring(0, 150)}...{" "}
          <Link to={`/news/${news._id}`} className="text-blue-500 cursor-pointer">Read More</Link>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <AiFillStar className="text-yellow-500" />
            <p className="ml-1 text-sm font-bold">{news.rating.number}</p>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye className="mr-1" />
            <p className="text-sm">{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
