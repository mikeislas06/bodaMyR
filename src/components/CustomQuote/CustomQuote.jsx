import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./CustomQuote.css";
import { transition } from "../../utils/framerProps";

const variant = {
  visible: {
    scale: 1,
    y: 0,
  },
  hidden: {
    scale: 0,
    y: 500,
  },
};

const CustomQuote = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={ref}
      className="quoteContainer"
      variants={variant}
      initial={"hidden"}
      animate={control}
      transition={transition}
    >
      <div className="quoteInner">
        <p>De todos los fuegos, el amor es el único que no puede extinguirse</p>
        <p>- Pablo Neruda</p>
      </div>
    </motion.section>
  );
};

export default CustomQuote;
