import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";

import "./Location.css";
import Decorator from "../Decorator/Decorator";

const Location = () => {
  return (
    <>
      <section className="LocationContainer">
        <div className="Location">
          <FaPeopleRoof size={"45px"} color="#eec274" />
          <h3>Recepción</h3>
          <p className="time">2:30 PM</p>
          <p className="addressName">El Socavón</p>
          <p className="address">
            San Juan Pachuca, 42010 Pachuca de Soto, Hgo.
          </p>
        </div>
        <div className="Location">
          <GiBigDiamondRing size={"45px"} color="#eec274" />
          <h3>Ceremonia Civil</h3>
          <p className="time">3:00 PM</p>
        </div>
      </section>
      <Decorator />
    </>
  );
};

export default Location;
