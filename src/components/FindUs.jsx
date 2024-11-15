import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="space-y-3 mt-5">
      <h2 className="font-semibold text-lg">Find Us</h2>

      <div className="join flex border text-base-200 join-vertical">
        <button className="btn justify-start join-item text-">
          {" "}
          <FaFacebook /> Facebook
        </button>
        <button className="btn justify-start join-item text-">
          {" "}
          <FaInstagram /> Instragram
        </button>
        <button className="btn justify-start join-item text-">
          {" "}
          <FaTwitter /> Twitter
        </button>

      </div>
    </div>
  );
};

export default FindUs;