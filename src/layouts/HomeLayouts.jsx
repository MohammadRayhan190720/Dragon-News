import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNav from "../components/Layout-components/LeftNav";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
  return (
    <div className="font-poppins">
      <Header></Header>
      <LatestNews></LatestNews>
      <div className="w-11/12 mx-auto pt-5">
        <Navbar></Navbar>
        <div className="grid md:grid-cols-12 mt-5">
          <div className="col-span-3"> <LeftNav></LeftNav>  </div>
          <div className="col-span-6">Main COntetnt</div>
          <div className="col-span-3">Right Nav</div>

        </div>
      </div>
    </div>
  );
};

export default HomeLayouts;