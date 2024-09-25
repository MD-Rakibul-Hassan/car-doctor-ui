import product1 from '../../../assets/images/products/1.png'
import product2 from '../../../assets/images/products/2.png'
import product3 from '../../../assets/images/products/3.png'
import product4 from '../../../assets/images/products/4.png'
import product5 from '../../../assets/images/products/5.png'
import product6 from '../../../assets/images/products/6.png'
import Single_product from './Single_product'

const productsInfo = [
    { img: product1, title: 'Disk break', rating: 5, price: '25$' },
    { img: product2, title: 'Hydronic', rating: 5, price: '50$' },
    { img: product3, title: 'Air filter', rating: 5, price: '25$' },
    { img: product4, title: 'Battery', rating: 5, price: '25$' },
    { img: product5, title: 'Tyre', rating: 5, price: '25$' },
    { img: product6, title: 'Other tools', rating: 5, price: '125$' },
];


const Product = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl lg:text-5xl font-bold">Browse Our Products</h1>
        <p className="text-center font-medium  my-3">
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which don't look even slightly
          believable
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5  lg:my-10 my-5">
              {productsInfo.map((product) => {
                  const { title, img, price, rating } = product;
                  return <Single_product title={title} img={ img} price={price} rating={rating} />;
        })}
      </div>
    </div>
  );
}

export default Product