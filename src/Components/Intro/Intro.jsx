import React from "react";
import "./Intro.css";
import Git from "../../img/git.png";
import Insta from "../../img/green insta.png";
import Link from "../../img/link.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import green from "../../img/News.png";
import vector from "../../img/Vector1.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import prince from "../../img/prince.png";
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
      </div>
      <div>
        <FloatingDiv image={Crown} txt1="Web" txt2="Devloper" />
      </div>
      <div style={{ top: 18, left: "0rem" }}>
        <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
      </div>
    </div>
  );
};

export default Intro;
