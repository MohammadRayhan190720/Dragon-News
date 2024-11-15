import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayouts = () => {
  return (
    <div className="py-5 font-poppins bg-[#F3F3F3]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayouts;