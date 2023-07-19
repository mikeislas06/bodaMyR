import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useCountdown } from "../../hooks/useCountdown";
import "./Counter.css";
import { transition } from "../../utils/framerProps";

const countDownDate = new Date("Sep 30, 2023 14:00:00").getTime();

const variantDays = {
  visible: {
    x: 0,
    y: 0,
  },
  hidden: {
    x: -500,
    y: -500,
  },
};

const variantHours = {
  visible: {
    x: 0,
    y: 0,
  },
  hidden: {
    x: 500,
    y: -500,
  },
};

const variantMinutes = {
  visible: {
    x: 0,
    y: 0,
  },
  hidden: {
    x: -500,
    y: 500,
  },
};

const variantSeconds = {
  visible: {
    x: 0,
    y: 0,
  },
  hidden: {
    x: 500,
    y: 500,
  },
};

const Counter = () => {
  const [days, hours, minutes, seconds] = useCountdown(countDownDate);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section ref={ref} className="counterContainer">
      <h3 className="counterTitle">Faltan:</h3>
      <div className="counter">
        <motion.div
          className="countBlock days"
          initial={"hidden"}
          variants={variantDays}
          animate={control}
          transition={transition}
        >
          <p className="countBlockNumber">{days < 10 ? `0${days}` : days}</p>
          <p className="countBlockText">Días</p>
        </motion.div>
        <motion.div
          className="countBlock hours"
          initial={"hidden"}
          variants={variantHours}
          animate={control}
          transition={transition}
        >
          <p className="countBlockNumber">{hours < 10 ? `0${hours}` : hours}</p>
          <p className="countBlockText">Horas</p>
        </motion.div>
        <motion.div
          className="countBlock minutes"
          initial={"hidden"}
          variants={variantMinutes}
          animate={control}
          transition={transition}
        >
          <p className="countBlockNumber">
            {minutes < 10 ? `0${minutes}` : minutes}
          </p>
          <p className="countBlockText">Minutos</p>
        </motion.div>
        <motion.div
          className="countBlock seconds"
          initial={"hidden"}
          variants={variantSeconds}
          animate={control}
          transition={transition}
        >
          <p className="countBlockNumber">
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
          <p className="countBlockText">Segundos</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Counter;
