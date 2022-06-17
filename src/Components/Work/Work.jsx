import React from "react";
import "./work.css";
import shopify from "../../img/Shopify.png";
import amazon from "../../img/amazon.png";
import facebook from "../../img/Facebook.png";
import fiverr from "../../img/fiverr.png";
import Upwork from "../../img/Upwork.png";

const Work = () => {
  return (
    <div className="work">
      {/* {left side} */}
      <div className="w-left">
        <div className="awesome">
          <span>Dream place to work</span>
          <span>Brand & Client</span>
          <span>
            Lorem ispum is simpley dummy text of printing of
            <br />
            ispum is simpley dummy text of printingLorem text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </span>

          <button className="button s-button"> Hire me</button>

          <button
            className="blur s-blur1"
            style={{ background: "ABF1FF94" }}
          ></button>
        </div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={facebook} alt="" />
          </div>
        </div>
        {/* background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
