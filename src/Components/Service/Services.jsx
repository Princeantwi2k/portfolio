import React from "react";
import "./Service.css";
import Card from "../Card/Card";
import heart from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import resume from "./resume.pdf";
const Services = () => {
  return (
    <div className="service">
      {/* {left side} */}
      <div className="awesome">
        <span>My Awesome</span>
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
        <div style={{ left: "14rem" }}>
          <Card
            emoji={heart}
            heading={"Design"}
            detail={"Figma, Photoshop, Adobe"}
          />
        </div>

        {/* second card */}

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Bootstrap"}
          />
        </div>

        {/* third card */}

        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"i can build you the best ui you have ever seen "}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
