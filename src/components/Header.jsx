import LogoImage from '../assets/images/logo.png'
const Header = () => {
  return (
    <div className='flex justify-center items-center flex-col my-6'>
      <div>
        <img src={LogoImage} alt="logo-image" />
      </div>
      <h2 className='text-lg font-semibold text-gray-400'>Journalism Without Fear or Favour</h2>
    </div>
  );
};

export default Header;