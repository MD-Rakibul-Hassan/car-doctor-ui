import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import overlayImage  from '../../assets/images/checkout/checkout.png'

const SingleService = () => {
    const data = useLoaderData();
    const {id} = useParams()
    const [service] = data.filter((findService) => findService?._id === id);
    console.log(service)
    return (
      <div>
        <div className="">
          <img src={overlayImage} className="w-full my-5" />
        </div>
        <div className=" lg:flex gap-5 my-10">
          <div className="flex-[65%]">
            <img src={service.img} className="w-full max-h-[400px] my-5" />
            <p className="text-md font-semibold">{service.description}</p>
          </div>

          <div className="flex-[30%] my-5">
            <div className="w-full hidden lg:flex bg-[#ff3811] h-[400px]"></div>
            <h4 className="my-3 font-bold">Price : {service.price} $</h4>
            <button className="bg-[#ff3811] px-5 py-3 text-white font-bold w-full">
              Add Service
            </button>
          </div>
        </div>
      </div>
    );
};

export default SingleService;
