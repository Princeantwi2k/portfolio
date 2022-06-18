import React, { useContext } from "react";
import "./Service.css";
import Card from "../Card/Card";
import heart from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import resume from "./resume.pdf";
import { themeContext } from "../../Context/Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="service" id="Services">
      {/* {left side} */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>service</span>
        <span>
          I make sure i design application
          <br /> in other to meet business and personal objective.
          <br />
          Speed and Acurracy is what i believe in most
          <br /> when it comes to delivering my project.
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
            detail={
              "   Your project will be done with speed and quality design for your project is assured always 24/7"
            }
          />
        </div>

        {/* second card */}

        <div style={{ left: "-1rem", top: "12rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={
              " I build HTML/CSS, Wordpress, Responsive Website,React Javascript  websites with the skills i have acquired so far."
            }
          />
        </div>

        {/* third card */}

        <div style={{ left: "19rem", top: "19rem" }}>
          <Card
            emoji={humble}
            heading={" Effective Communication"}
            detail={
              "  Communication between the client and me will be effective and easy,am alway available to my client 24/7"
            }
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
