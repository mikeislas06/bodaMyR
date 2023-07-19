import React from "react";

import "./WeddingInfo.css";
import Decorator from "../Decorator/Decorator";

const WeddingInfo = () => {
  return (
    <>
      <section className="mainTitle">
        <p className="announcement a1">
          Los momentos importantes los compartimos contigo
        </p>
        <p className="announcement a2">¡Te invitamos a nuestra Boda!</p>
        <div className="wedsInfo">
          <p className="wedsNames">Rosalba y Miguel Angel</p>
          <p className="wedDate">30 Septiembre 2023</p>
        </div>
      </section>
      <Decorator />
    </>
  );
};

export default WeddingInfo;
