import LogoImage from '../assets/images/logo.png'
import moment from "moment";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col my-6 space-y-3">
      <div>
        <img src={LogoImage} alt="logo-image" />
      </div>
      <h2 className="text-lg font-semibold text-gray-400">
        Journalism Without Fear or Favour
      </h2>
      <p className='text-lg font-semibold text-gray-600'>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;