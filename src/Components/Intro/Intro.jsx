import React, { useContext } from "react";
import "./Intro.css";
import Git from "../../img/git.png";
import Insta from "../../img/green insta.png";
import Links from "../../img/link.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import green from "../../img/Vector2.png";
import vector from "../../img/Vector1.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import prince from "../../img/omg.png";
import glasses from "../../img/glassesimoji.png";
import { themeContext } from "../../Context/Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am </span>
          <span>Prince Antwi</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="Contact" spy={true} smooth={true}>
          <button className="button i-button">Hire</button>
        </Link>

        <div>
          <div className="i-icons">
            <img src={Git} alt="pic" className="img" />
            <img src={Insta} alt="pic" className="img" />
            <img src={Links} alt="pic" className="img" />
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={vector} alt="" />
        <img src={green} alt="" />
        <img src={prince} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glasses}
          alt=""
        />
        {/* animation */}
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Devloper" />
        </motion.div>
        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
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
