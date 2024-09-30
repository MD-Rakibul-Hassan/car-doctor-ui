import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import overlayImage from '../../assets/images/checkout/checkout.png'
import {
  getLocalStrogeData,
  setLocalStrogeData,
} from "../../Local-Stroge/localDB";
import './single-service.css'

const SingleService = () => {
    const data = useLoaderData();
    const {id} = useParams()
    const [service] = data.filter((findService) => findService?._id === id);
  const handleAddToCart = (id) => {
    setLocalStrogeData(id)
  }
    return (
      <div>
        <div className="relative">
          <img src={overlayImage} className="w-full my-5" />
          <div className="imageOverlay">
            <h1 className="text-white font-bold text-2xl lg:text-5xl">
              Service Details
            </h1>
          </div>
        </div>
        <div className=" lg:flex gap-5 my-10">
          <div className="flex-[65%]">
            <img src={service?.img} className="w-full max-h-[400px] my-5" />
            <p className="text-md font-semibold">{service?.description}</p>
          </div>

          <div className="flex-[30%] my-5">
            <div className="w-full hidden lg:flex bg-[#ede9e9] h-[400px] flex-col shadow-md rounded-md p-5">
              <input
                type="text"
                className="w-full h-14 my-3 rounded-md font-bold px-3 border-0 outline-0 bg-slate-100"
                defaultValue={service?.title}
                placeholder="Service name"
                readOnly
              />
              <input
                type="text"
                className="w-full h-14 my-3 rounded-md font-bold px-3 border-0 outline-0 bg-slate-100"
                defaultValue={service?.service_id}
                placeholder="Service Id"
                readOnly
              />
              <input
                type="text"
                className="w-full h-14 my-3 rounded-md font-bold px-3 border-0 outline-0 bg-slate-100"
                defaultValue={service?.price + " $"}
                placeholder="Price"
                readOnly
              />
            </div>

            <button
              onClick={() => handleAddToCart(service._id)}
              className="bg-[#ff3811] px-5 py-3 text-white font-bold w-full mt-4"
            >
              Add Service
            </button>
          </div>
        </div>
      </div>
    );
};

export default SingleService;
