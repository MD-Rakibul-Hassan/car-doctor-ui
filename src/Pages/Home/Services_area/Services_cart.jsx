import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './services.css'

const Services_cart = ({ img, price, title, id }) => {
    
  return (
    <div className="card border-2 rounded-md  shadow-xl p-4">
      <div className="cart-container">
        <img src={img} alt="" />
      </div>
      <div className="card-body p-0  my-3">
        <h2 className="card-title">{title }</h2>
        <div className="flex">
        <p className='text-orange-500'>Price : {price}</p>
          <Link to=''>
            <FaArrowRightLong  className="text-orange-500"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services_cart