import { useGetData } from "./../../../Hooks/useGetData";
import Services_cart from "./Services_cart";

const Services_area = () => {
  const [data] = useGetData("./services.json");
    console.log(data)
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl lg:text-5xl font-bold">Our Services Area</h1>
        <p className="text-center font-medium  my-3">
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which don't look even slightly
          believable
        </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5  lg:my-10 my-5">
              {
                  data.map(service => {
                      const { _id,title,price,img} = service;
                      return <Services_cart key={_id} img={img} title={title} price={price} id={_id}/>
                  })
              }
          </div>
    </div>
  );
};

export default Services_area;
