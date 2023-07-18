import React from "react";

import rym from "../../assets/rym.png";
import "./MainImage.css";

const MainImage = () => {
  return (
    <section className="mainImageContainer">
      <img src={rym} alt="Foto de los novios" className="mainPhoto" />
    </section>
  );
};

export default MainImage;
