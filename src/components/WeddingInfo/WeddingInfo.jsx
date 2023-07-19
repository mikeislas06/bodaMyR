import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./WeddingInfo.css";
import Decorator from "../Decorator/Decorator";
import { transition } from "../../utils/framerProps";

const variant1 = {
  visible: {
    x: 0,
  },
  hidden: {
    x: 1000,
  },
};

const variant2 = {
  visible: {
    x: 0,
  },
  hidden: {
    x: -1000,
  },
};

const WeddingInfo = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <>
      <section className="mainTitle" ref={ref}>
        <motion.div
          variants={variant1}
          initial="hidden"
          animate={control}
          transition={transition}
        >
          <p className="announcement a1">
            Los momentos importantes los compartimos contigo
          </p>
          <p className="announcement a2">¡Te invitamos a nuestra Boda!</p>
        </motion.div>
        <motion.div
          className="wedsInfo"
          variants={variant2}
          initial={"hidden"}
          animate={control}
          transition={transition}
        >
          <p className="wedsNames">Rosalba y Miguel Angel</p>
          <p className="wedDate">30 Septiembre 2023</p>
        </motion.div>
      </section>
      <Decorator />
    </>
  );
};

export default WeddingInfo;
