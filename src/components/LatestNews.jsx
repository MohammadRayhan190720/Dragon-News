import  { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="w-11/12 mx-auto flex bg-base-200 p-4 ">
      <p className="bg-red-500 px-5 py-3 text-white font-bold text-lg">Latest</p>
      <Marquee pauseOnHover={true} className='text-lg font-semibold'>
        <Link  to='/news'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsa hic, necessitatibus possimus cupiditate odio.
        </Link>
        <Link to='/news'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsa hic, necessitatibus possimus cupiditate odio.
        </Link>
        <Link to='/news'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsa hic, necessitatibus possimus cupiditate odio.
        </Link>
        
      </Marquee>
      
    </div>
  );
};

export default LatestNews;