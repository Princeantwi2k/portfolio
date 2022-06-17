import React from "react";
import "./Card.css";
const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button "> Lern more</button>
    </div>
  );
};

export default Card;
