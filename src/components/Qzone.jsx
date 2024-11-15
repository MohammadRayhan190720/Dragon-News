import image1 from '../assets/images/swimming.png'
import image2 from '../assets/images/playground.png'
import image3 from '../assets/images/class.png'
import image4 from '../assets/images/bg.png'
const Qzone = () => {
  return (
    <div className='mt-5 bg-base-300 p-4'>
     <div>
      <img src={image1} alt="" />
     </div>
     <div>
      <img src={image2} alt="" />
     </div>
     <div>
      <img src={image3} alt="" />
     </div>
     <div>
      <img src={image4} alt="" />
     </div>
      
    </div>
  );
};

export default Qzone;