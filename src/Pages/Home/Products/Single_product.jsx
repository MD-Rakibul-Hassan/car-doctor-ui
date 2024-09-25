import { FaShoppingBag } from "react-icons/fa";
import './product.css'
const Single_product = ({ title, img, price, rating }) => {
  return (
    <div>
      <div className="card shadow-xl ">
        <figure className="px-10 relative bg-slate-300 product-img   pt-10">
          <img src={img} alt="Product" className="rounded-xl h-[200px]" />
          <FaShoppingBag className="absolute top-5 right-5 hidden icon text-orange-500 cursor-pointer" />
        </figure>
        <div className="card-body items-center text-center">
          <div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>

          <h2 className="card-title">{title}</h2>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Single_product;
