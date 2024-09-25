import { FaCalendarAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="max-h-[500px] h-full w-full bg-black flex justify-between p-20 my-10 rounded-xl text-white">
      <div className="flex items-center gap-2  ">
        <FaCalendarAlt className="text-4xl" />
        <div>
          <h4 className="font-bold font-md">We are open on monday-fariday</h4>
          <h1 className="text-2xl font-bold">7:00 am - 9:00 am</h1>
        </div>
          </div>
          
      <div className="flex items-center gap-2">
        <BsFillTelephoneFill className="text-4xl" />
        <div>
          <h4 className="font-bold font-md">Have a quiestion ?</h4>
          <h1 className="text-2xl font-bold">01703890915</h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <GrMapLocation className="text-4xl" />
        <div>
          <h4 className="font-bold font-md">Need a repair ? our location</h4>
          <h1 className="text-2xl font-bold">Satkhira Sadar</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
