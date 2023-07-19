import React from "react";

import rym from "../../assets/rym.png";
import "./MainImage.css";
import Decorator from "../Decorator/Decorator";

const MainImage = () => {
  return (
    <>
      <section className="mainImageContainer">
        <img src={rym} alt="Foto de los novios" className="mainPhoto" />
      </section>
      <Decorator />
    </>
  );
};

export default MainImage;
