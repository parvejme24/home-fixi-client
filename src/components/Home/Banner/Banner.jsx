import React from "react";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="container mx-auto -z-50 rounded-lg">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="min-h-[400px] h-[400px] lg:min-h-[60px] lg:h-[500px] w-full"
            src="https://i.ibb.co/X2Sv0Vb/banner7.jpg"
            alt=""
          />
          <div className="min-h-[400px] h-[400px] lg:min-h-[500px] lg:h-[500px] flex justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-l from-[#000000b1] to-[#0000007b] ">
            <div className="lg:w-1/2 mx-auto p-4 md:p-10 text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Experience the Difference of Professional Home Care
              </h2>
              <p className="md:text-xl font-semibold text-gray-200">
                Our commitment to excellence means you can expect nothing but
                the best when you choose our home service company. We use
                top-quality materials and equipment, and our technicians are
                trained to exceed your expectations.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="min-h-[400px] h-[400px] lg:min-h-[60px] lg:h-[500px] w-full"
            src="https://i.ibb.co/Jp9FwNm/banner6.jpg"
            alt=""
          />
          <div className="min-h-[400px] h-[400px] lg:min-h-[500px] lg:h-[500px] flex justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-l from-[#000000b1] to-[#0000007b] ">
            <div className="lg:w-1/2 mx-auto p-4 md:p-10 text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                We're Your One-Stop Shop for Home Services
              </h2>
              <p className="md:text-xl font-semibold text-gray-200">
                Whether you need plumbing, electrical, carpentry, cleaning, or
                landscaping services, we're your one-stop shop for all your home
                maintenance needs. We'll handle the details so you can enjoy a
                worry-free home experience.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="min-h-[400px] h-[400px] lg:min-h-[60px] lg:h-[500px] w-full"
            src="https://i.ibb.co/nDnDJGR/banner3.jpg"
            alt=""
          />
          <div className="min-h-[400px] h-[400px] lg:min-h-[500px] lg:h-[500px] flex justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-l from-[#0000008c] to-[#00000072] ">
            <div className="lg:w-1/2 mx-auto p-4 md:p-10 text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Enhance Your Home Life with Expert Services
              </h2>
              <p className="md:text-xl font-semibold text-gray-200">
                Experience the convenience and peace of mind that comes with
                professional home services. Our team of skilled technicians is
                ready to tackle your to-do list, from plumbing and electrical
                repairs to landscaping and home cleaning.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="min-h-[400px] h-[400px] lg:min-h-[60px] lg:h-[500px] w-full"
            src="https://i.ibb.co/pf0k8KD/banner4.jpg"
            alt=""
          />
          <div className="min-h-[400px] h-[400px] lg:min-h-[500px] lg:h-[500px] flex justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-l from-[#00000091] to-[#00000072] ">
            <div className="lg:w-1/2 mx-auto p-4 md:p-10 text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Reclaim Your Time and Enjoy Your Home
              </h2>
              <p className="md:text-xl font-semibold text-gray-200">
                Don't let household chores and repairs take over your free time.
                Let our reliable and experienced home service professionals
                handle the tasks so you can relax and focus on the things you
                love.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="min-h-[400px] h-[400px] lg:min-h-[60px] lg:h-[500px] w-full"
            src="https://i.ibb.co/pf0k8KD/banner4.jpg"
            alt=""
          />
          <div className="min-h-[400px] h-[400px] lg:min-h-[500px] lg:h-[500px] flex justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-l from-[#00000091] to-[#00000072] ">
            <div className="lg:w-1/2 mx-auto p-4 md:p-10 text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Let Us Help You Create the Home You Deserve
              </h2>
              <p className="md:text-xl font-semibold text-gray-200">
                We believe your home should be a place of comfort, relaxation,
                and enjoyment. Our home service professionals are dedicated to
                helping you create the home you've always wanted.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
