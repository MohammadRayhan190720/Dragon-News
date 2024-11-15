import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNav from "../components/Layout-components/LeftNav";
import RightNav from "../components/Layout-components/RightNav";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
  return (
    <div className="font-poppins">
      <Header></Header>
      <LatestNews></LatestNews>
      <div className="w-11/12 mx-auto pt-5">
        <Navbar></Navbar>
        <div className="grid md:grid-cols-12 mt-5 gap-8">
          <div className="col-span-3"> <LeftNav></LeftNav>  </div>
          <div className="col-span-6">
            <Outlet></Outlet>
              </div>
          <div className="col-span-3"><RightNav></RightNav></div>

        </div>
      </div>
    </div>
  );
};

export default HomeLayouts;