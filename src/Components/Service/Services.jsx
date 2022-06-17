import React, { useContext } from "react";
import "./Service.css";
import Card from "../Card/Card";
import heart from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import resume from "./resume.pdf";
import { themeContext } from "../../Context/Context";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 1, type: "spring" };
  return (
    <div className="service" id="Services">
      {/* {left side} */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>service</span>
        <span>
          i make sure design application
          <br /> in other to meet business and personal objective.
        </span>
        <a href={resume} download>
          <button className="button s-button"> Download Cv</button>
        </a>

        <button
          className="blur s-blur1"
          style={{ background: "ABF1FF94" }}
        ></button>
      </div>

      {/* right side */}
      <div className="cards">
        <div style={{ left: "22rem" }}>
          <Card
            emoji={heart}
            heading={"Design"}
            detail={"Figma, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </div>

        {/* second card */}

        <div style={{ left: "-1rem", top: "12rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Bootstrap,Nodejs, "}
          />
        </div>

        {/* third card */}

        <motion.div style={{ left: "19rem", top: "19rem" }}>
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"i can build you the best ui you have ever seen "}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
