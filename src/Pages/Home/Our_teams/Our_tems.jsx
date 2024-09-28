import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./team.css";

const teamsInfo = [
  {
    image: team1,
    title: "Engine Expert",
    scocal: [<FaFacebook />, <FaLinkedin />, <FaTwitter />, <FaInstagram />],
  },
  {
    image: team2,
    title: "Engine Expert",
    scocal: [<FaFacebook />, <FaLinkedin />, <FaTwitter />, <FaInstagram />],
  },
  {
    image: team3,
    title: "Engine Expert",
    scocal: [<FaFacebook />, <FaLinkedin />, <FaTwitter />, <FaInstagram />],
  },
];
const Our_tems = () => {
     
  return (
    <div className="my-10">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl lg:text-5xl font-bold">Meet Our Team</h1>
        <p className="text-center font-medium  my-3">
          A way of organizing work that involves people working in separate
          teams to do different task
        </p>
      </div>
      <div className="my-5">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
                  // navigation={true}
          className="mySwiper"
        >
          {teamsInfo.map((team, index) => {
            return (
              <SwiperSlide  key={index} className="">
                <div className="border-2 p-10 overlay-container  ">
                  <img src={team.image} className="" />
                  <h1 className="text-center text-xl font-bold my-2">
                    {team.title}
                  </h1>
                  <div className="overlay">
                    {team.scocal.map((icon, index) => {
                      return (
                        <span className="text-5xl shadow-md rounded-full">
                          {icon}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Our_tems;
