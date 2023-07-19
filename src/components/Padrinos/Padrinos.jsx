import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Decorator from "../Decorator/Decorator";
import { transition } from "../../utils/framerProps";
import jyc from "../../assets/jyc.jpg";
import cym from "../../assets/cym.png";
import "./Padrinos.css";

const variant1 = {
  visible: {
    x: 0,
    y: 0,
    rotate: 0,
  },
  hidden: {
    x: -1000,
    y: 500,
    rotate: -90,
  },
};

const variant2 = {
  visible: {
    x: 0,
    y: 0,
    rotate: 0,
  },
  hidden: {
    x: 1000,
    y: 500,
    rotate: 90,
  },
};

const Padrinos = () => {
  const control = useAnimation();
  const control2 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    }
  }, [control2, inView2]);

  return (
    <>
      <section className="padrinos">
        <h3 ref={ref}>Padrinos Novio</h3>
        <motion.div
          className="padrinosContainer"
          variants={variant1}
          initial="hidden"
          animate={control}
          transition={transition}
        >
          <img src={jyc} alt="" />
          <p>José Miguel Islas</p>
          <p className="and">y</p>
          <p>Cynthia Peñaloza</p>
        </motion.div>
        <h3 ref={ref2}>Padrinos Novia</h3>
        <motion.div
          className="padrinosContainer"
          variants={variant2}
          initial="hidden"
          animate={control2}
          transition={transition}
        >
          <img src={cym} alt="" />
          <p>Miguel Angel Islas</p>
          <p className="and">y</p>
          <p>Ma Isabel Monarrez</p>
        </motion.div>
      </section>
      <Decorator />
    </>
  );
};

export default Padrinos;
