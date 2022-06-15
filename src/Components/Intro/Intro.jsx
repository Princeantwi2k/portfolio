import React from "react";
import "./Intro.css";
import Git from "../../img/git.png";
import Insta from "../../img/green insta.png";
import Link from "../../img/link.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import green from "../../img/Vector2.png";
import vector from "../../img/Vector1.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import prince from "../../img/omg.png";
import glasses from "../../img/glassesimoji.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Prince Antwi</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire</button>

        <div>
          <div className="i-icons">
            <img src={Git} alt="pic" className="img" />
            <img src={Insta} alt="pic" className="img" />
            <img src={Link} alt="pic" className="img" />
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={vector} alt="" />
        <img src={green} alt="" />
        <img src={prince} alt="" />
        <img src={glasses} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Devloper" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* {blur div} */}
        <div
          className="blur"
          style={{ backgroundColor: "rgb(238 210 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
