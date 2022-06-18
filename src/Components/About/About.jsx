import React, { useContext } from "react";
import "./About.css";
import { themeContext } from "../../Context/Context";
import me from "../../img/me.jpg";
const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id="About">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Personal</span>
        <span>Information</span>
        <span>
          I'm Prince Kojo Antwi,
          <br /> I am 24 years old gentleman. I am a Front end web develper but
          currently <br />
          do not any professional experience at the moment,
          <br />
          I have built some website as my project you can
          <br />
          check them out in my portfolio. With software development,
          <br />
          there is always something new to discover.
          <br /> Designing a program that is truly helpful to the user is my
          ultimate <br />
          goal on every project, I'm hoping to get deals with <br />
          companies and individuals so i can help in building projects to gain
          <br />
          experience and more skill in the process. The programming language i
          <br />
          specialize in is Javascript,React,Bootstrap,Html and Css. I do most of
          <br />
          my projects in Reactjs. In the near future, I would like to work for
          <br />
          any of the big and successful software companies such as Google,
          <br />
          Apple, Microsoft, Amazon and Start up my own software Companies after
          <br />
          working for ages and againing more experience.
        </span>

        <button
          className="blur s-blur1"
          style={{ background: "ABF1FF94" }}
        ></button>
      </div>

      {/* right side */}
      <div className="cards">
        <img src={me} alt="" className="a-img" />
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
