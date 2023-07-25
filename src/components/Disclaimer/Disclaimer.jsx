import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Disclaimer.css";
import { transition } from "../../utils/framerProps";

const variant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const Disclaimer = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section className="ThanksSection" ref={ref}>
      <motion.div
        variants={variant}
        initial="hidden"
        animate={control}
        transition={transition}
        className="ThanksSection-container"
      >
        <div>
          <p>Tu presencia es importante para nosotros.</p>
          <p>¡Te esperamos!</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Disclaimer;
