import React, { useContext } from "react";
import "./work.css";
import shopify from "../../img/Shopify.png";
import amazon from "../../img/amazon.png";
import facebook from "../../img/Facebook.png";
import fiverr from "../../img/fiverr.png";
import Upwork from "../../img/Upwork.png";
import { themeContext } from "../../Context/Context";
import { motion } from "framer-motion";

const Work = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work" id="works">
      {/* {left side} */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Dream place to work
          </span>
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
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
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
        </motion.div>
        {/* background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
