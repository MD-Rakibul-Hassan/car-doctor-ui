import slide1 from '../../../assets/images/banner/1.jpg'
import slide2  from '../../../assets/images/banner/2.jpg'
import slide3  from '../../../assets/images/banner/3.jpg'
import slide4  from '../../../assets/images/banner/4.jpg'
import slide5  from '../../../assets/images/banner/5.jpg'
import slide6  from '../../../assets/images/banner/6.jpg'
import { GoArrowLeft } from "react-icons/go";
import { LuMoveRight } from "react-icons/lu";
import './banner.css'



const Banner = () => {
  return (
    <div>
      <div className="carousel max-h-[600px] rounded-xl w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} className="w-full object-fill" />
          <div className="slider-overlay  absolute">
            <div className="flex flex-col h-full justify-center ml-9 lg:ml-20 ">
              <h1 className="text-2xl lg:text-5xl font-bold tracking-tighter leading-5 text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="max-w-[500px] font-medium text-md my-3 text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="px-4 py-3 bg-[#ff3811] text-white font-bold text-md hover:border-2 hover:bg-transparent duration-700 rounded-md">
                  Discover More
                </button>
                <button className="px-4 py-3 border-2  rounded-md text-white hover:bg-[#ff3811] duration-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  right-20 bottom-7 flex -translate-y-1/2 transform justify-end lg:gap-10 gap-5">
            <a
              href="#slide6"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide2"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <LuMoveRight />
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} className="w-full object-fill" />
          <div className="slider-overlay  absolute">
            <div className="flex flex-col h-full justify-center ml-9 lg:ml-20 ">
              <h1 className="text-2xl lg:text-5xl font-bold tracking-tighter leading-5 text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="max-w-[500px] font-medium text-md my-3 text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="px-4 py-3 bg-[#ff3811] text-white font-bold text-md hover:border-2 hover:bg-transparent duration-700 rounded-md">
                  Discover More
                </button>
                <button className="px-4 py-3 border-2  rounded-md text-white hover:bg-[#ff3811] duration-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  right-20 bottom-7 flex -translate-y-1/2 transform justify-end lg:gap-10 gap-5">
            <a
              href="#slide1"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide3"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <LuMoveRight />
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3} className="w-full object-fill" />
          <div className="slider-overlay  absolute">
            <div className="flex flex-col h-full justify-center ml-9 lg:ml-20 ">
              <h1 className="text-2xl lg:text-5xl font-bold tracking-tighter leading-5 text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="max-w-[500px] font-medium text-md my-3 text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="px-4 py-3 bg-[#ff3811] text-white font-bold text-md hover:border-2 hover:bg-transparent duration-700 rounded-md">
                  Discover More
                </button>
                <button className="px-4 py-3 border-2  rounded-md text-white hover:bg-[#ff3811] duration-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  right-20 bottom-7 flex -translate-y-1/2 transform justify-end lg:gap-10 gap-5">
            <a
              href="#slide2"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide4"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <LuMoveRight />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide4} className="w-full object-fill" />
          <div className="slider-overlay  absolute">
            <div className="flex flex-col h-full justify-center ml-9 lg:ml-20 ">
              <h1 className="text-2xl lg:text-5xl font-bold tracking-tighter leading-5 text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="max-w-[500px] font-medium text-md my-3 text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="px-4 py-3 bg-[#ff3811] text-white font-bold text-md hover:border-2 hover:bg-transparent duration-700 rounded-md">
                  Discover More
                </button>
                <button className="px-4 py-3 border-2  rounded-md text-white hover:bg-[#ff3811] duration-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  right-20 bottom-7 flex -translate-y-1/2 transform justify-end lg:gap-10 gap-5">
            <a
              href="#slide3"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide5"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <LuMoveRight />
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={slide5} className="w-full object-fill" />
          <div className="slider-overlay  absolute">
            <div className="flex flex-col h-full justify-center ml-9 lg:ml-20 ">
              <h1 className="text-2xl lg:text-5xl font-bold tracking-tighter leading-5 text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="max-w-[500px] font-medium text-md my-3 text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="px-4 py-3 bg-[#ff3811] text-white font-bold text-md hover:border-2 hover:bg-transparent duration-700 rounded-md">
                  Discover More
                </button>
                <button className="px-4 py-3 border-2  rounded-md text-white hover:bg-[#ff3811] duration-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  right-20 bottom-7 flex -translate-y-1/2 transform justify-end lg:gap-10 gap-5">
            <a
              href="#slide4"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide6"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <LuMoveRight />
            </a>
          </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full">
          <img src={slide6} className="w-full object-fill" />
          <div className="slider-overlay  absolute">
            <div className="flex flex-col h-full justify-center ml-9 lg:ml-20 ">
              <h1 className="text-2xl lg:text-5xl font-bold tracking-tighter leading-5 text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="max-w-[500px] font-medium text-md my-3 text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="px-4 py-3 bg-[#ff3811] text-white font-bold text-md hover:border-2 hover:bg-transparent duration-700 rounded-md">
                  Discover More
                </button>
                <button className="px-4 py-3 border-2  rounded-md text-white hover:bg-[#ff3811] duration-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  right-20 bottom-7 flex -translate-y-1/2 transform justify-end lg:gap-10 gap-5">
            <a
              href="#slide5"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide1"
              className="bg-[#727375]/60 p-6 text-2xl hover:bg-[#ff3811] duration-700 text-white rounded-full"
            >
              <LuMoveRight />
            </a>
          </div>
        </div>

        

       
      </div>
    </div>
  );
}

export default Banner