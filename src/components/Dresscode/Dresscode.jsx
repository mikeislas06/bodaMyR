import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUserTie } from "react-icons/fa";

import "./Dresscode.css";
import { transition } from "../../utils/framerProps";

const variant = {
  visible: {
    x: 0,
  },
  hidden: {
    x: 1000,
  },
};

const Dresscode = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div ref={ref} className="containerDC">
      <motion.section
        className="Dresscode"
        variants={variant}
        initial="hidden"
        animate={control}
        transition={transition}
      >
        <FaUserTie size={"36px"} color="#eec274" />
        <h3>Código de Vestimenta</h3>
        <p>Formal</p>
      </motion.section>
    </div>
  );
};

export default Dresscode;
