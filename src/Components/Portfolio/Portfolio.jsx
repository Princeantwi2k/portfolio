import React from "react";
import pic from "../../img/app6.png";
import pic1 from "../../img/app7.png";
import pic2 from "../../img/app9.png";
import pic3 from "../../img/app1.png";
import pic4 from "../../img/app2.png";
import pic5 from "../../img/app4.png";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent Project</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          {" "}
          <img src={pic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={pic1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={pic2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={pic3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={pic4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={pic5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
