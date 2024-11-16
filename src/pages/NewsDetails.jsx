import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/Layout-components/RightNav";

const NewsDetails = () => {
  const data = useLoaderData()
  const news = data.data[0]
  console.log(news)
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="grid md:grid-cols-12">
        <section className="col-span-9 border">
          <h2 className="text-xl font-bold">Dragon News</h2>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={news.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center space-y-4">
              <h2 className=" text-2xl font-bold">{news?.title}</h2>
              <p className="text-lg font-semibold">{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-neutral">Back To Category</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3 border">
          <RightNav></RightNav>
        </section>
      </div>
    </div>
  );
};

export default NewsDetails;