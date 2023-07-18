import React from "react";

import { useCountdown } from "../../hooks/useCountdown";
import "./Counter.css";

const countDownDate = new Date("Sep 30, 2023 14:00:00").getTime();

const Counter = () => {
  const [days, hours, minutes, seconds] = useCountdown(countDownDate);

  return (
    <section className="counterContainer">
      <h3 className="counterTitle">Faltan:</h3>
      <div className="counter">
        <div className="countBlock days">
          <p className="countBlockNumber">{days < 10 ? `0${days}` : days}</p>
          <p className="countBlockText">Días</p>
        </div>
        <div className="countBlock hours">
          <p className="countBlockNumber">{hours < 10 ? `0${hours}` : hours}</p>
          <p className="countBlockText">Horas</p>
        </div>
        <div className="countBlock minutes">
          <p className="countBlockNumber">
            {minutes < 10 ? `0${minutes}` : minutes}
          </p>
          <p className="countBlockText">Minutos</p>
        </div>
        <div className="countBlock seconds">
          <p className="countBlockNumber">
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
          <p className="countBlockText">Segundos</p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
