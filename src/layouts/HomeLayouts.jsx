import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
  return (
    <div className="font-poppins">
      <Header></Header>
      <LatestNews></LatestNews>
      <div className="w-11/12 mx-auto pt-5">
        <Navbar></Navbar>
        <div className="grid md:grid-cols-12 mt-5">
          <div className="col-span-3 border">Left Nav</div>
          <div className="col-span-6 border">Main COntetnt</div>
          <div className="col-span-3 border">Right Nav</div>

        </div>
      </div>
    </div>
  );
};

export default HomeLayouts;