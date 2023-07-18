import React from "react";

import jyc from "../../assets/jyc.jpg";
import cym from "../../assets/cym.png";
import "./Padrinos.css";

const Padrinos = () => {
  return (
    <section className="padrinos">
      <h3>Padrinos Novio</h3>
      <div className="padrinosContainer">
        <img src={jyc} alt="" />
        <p>José Miguel Islas</p>
        <p className="and">y</p>
        <p>Cynthia Peñaloza</p>
      </div>
      <h3>Padrinos Novia</h3>
      <div className="padrinosContainer">
        <img src={cym} alt="" />
        <p>Miguel Angel Islas</p>
        <p className="and">y</p>
        <p>Ma Isabel Monarrez</p>
      </div>
    </section>
  );
};

export default Padrinos;
