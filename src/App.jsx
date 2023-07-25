import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import MainImage from "./components/MainImage/MainImage";
import WeddingInfo from "./components/WeddingInfo/WeddingInfo";
import Counter from "./components/Counter/Counter";
import Padrinos from "./components/Padrinos/Padrinos";
import CustomQuote from "./components/CustomQuote/CustomQuote";
import Location from "./components/Location/Location";
import Dresscode from "./components/Dresscode/Dresscode";
import RSVP from "./components/RSVP/RSVP";
import Decorator from "./components/Decorator/Decorator";

import { transition } from "./utils/framerProps";
import "./App.css";
import Disclaimer from "./components/Disclaimer/Disclaimer";

const variant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const App = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="mainContainer">
      <AudioPlayer />
      <MainImage />
      <WeddingInfo />
      <Counter />
      <Padrinos />
      <CustomQuote />
      <Location />
      <Dresscode />
      <RSVP />
      <Decorator />
      <motion.iframe
        ref={ref}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.12318105809283!2d-98.72707236631689!3d20.135261732059337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109ea8f1e8d11%3A0x9d2a880419ac3fdf!2sEl%20Socav%C3%B3n%20Pachuca!5e0!3m2!1ses-419!2smx!4v1689710652407!5m2!1ses-419!2smx"
        allowFullScreen=""
        title="El Socavon Pachuca"
        height={450}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        variants={variant}
        initial="hidden"
        animate={control}
        transition={transition}
        style={{ marginBottom: "50px" }}
      ></motion.iframe>
      <Disclaimer />
    </div>
  );
};

export default App;
