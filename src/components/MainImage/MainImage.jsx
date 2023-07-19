import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import rym from "../../assets/rym.png";
import "./MainImage.css";
import Decorator from "../Decorator/Decorator";
import { transition } from "../../utils/framerProps";

const variant = {
  visible: {
    rotate: 360,
    scale: 1,
  },
  hidden: {
    rotate: 180,
    scale: 0,
  },
};

const MainImage = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <>
      <motion.section
        ref={ref}
        className="mainImageContainer"
        variants={variant}
        initial={"hidden"}
        animate={control}
        transition={transition}
      >
        <img src={rym} alt="Foto de los novios" className="mainPhoto" />
      </motion.section>
      <Decorator />
    </>
  );
};

export default MainImage;
