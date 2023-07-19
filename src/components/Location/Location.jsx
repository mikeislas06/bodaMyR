import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiBigDiamondRing } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";

import "./Location.css";
import Decorator from "../Decorator/Decorator";

const variant = {
  visible: {
    scale: 1,
  },
  hidden: {
    scale: 0,
  },
};

const Location = () => {
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
      <section className="LocationContainer">
        <motion.div
          ref={ref}
          className="Location"
          variants={variant}
          initial="hidden"
          animate={control}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <FaPeopleRoof size={"45px"} color="#eec274" />
          <h3>Recepción</h3>
          <p className="time">2:30 PM</p>
          <p className="addressName">El Socavón</p>
          <p className="address">
            San Juan Pachuca, 42010 Pachuca de Soto, Hgo.
          </p>
        </motion.div>
        <motion.div
          ref={ref2}
          className="Location"
          variants={variant}
          initial="hidden"
          animate={control2}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <GiBigDiamondRing size={"45px"} color="#eec274" />
          <h3>Ceremonia Civil</h3>
          <p className="time">3:00 PM</p>
        </motion.div>
      </section>
      <Decorator />
    </>
  );
};

export default Location;
