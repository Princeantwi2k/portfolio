import React, { useContext } from "react";
import pic from "../../img/app6.png";
import pic1 from "../../img/app7.png";
import pic2 from "../../img/app9.png";
import pic3 from "../../img/app1.png";
import pic4 from "../../img/app2.png";
import pic5 from "../../img/app4.png";
import pic10 from "../../img/app10.png";
import pic7 from "../../img/app3.png";
import pic6 from "../../img/app5.png";
import pic11 from "../../img/app11.png";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context/Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://deprelief.vercel.app/">
            <img src={pic11} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://blog-five-iota.vercel.app/">
            <img src={pic} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://cryptocurrency-princeantwi2k.vercel.app/">
            {" "}
            <img src={pic1} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://cocacla-princeantwi2k.vercel.app/">
            {" "}
            <img src={pic2} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://laughing-newton-2012ab.netlify.app">
            {" "}
            <img src={pic3} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://confident-austin-7589d3.netlify.app/">
            <img src={pic4} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://adom-clinic-princeantwi2k.vercel.app/">
            {" "}
            <img src={pic5} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://truck-h8y89yz1k-princeantwi2k.vercel.app/">
            {" "}
            <img src={pic10} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://articles-green.vercel.app/">
            <img src={pic6} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://road-issues.vercel.app/">
            {" "}
            <img src={pic7} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
