import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaWhatsapp } from "react-icons/fa";

import "./RSVP.css";
import { transition } from "../../utils/framerProps";

const whats = "527711264215";
const variant = {
  visible: {
    x: 0,
  },
  hidden: {
    x: -1000,
  },
};

const RSVP = () => {
  const [nombre, setNombre] = useState("");
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes utilizar la API de WhatsApp para enviar los datos del formulario al número deseado
    const mensaje = `Te confirmamos nuestra asistencia a la boda de Rosalba y Miguel Angel el 30 de Septiembre de 2023\n${nombre}\nNúmero de personas:`;
    const url = `https://api.whatsapp.com/send?phone=${whats}&text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div ref={ref} className="containerRSVP">
      <motion.section
        className="RSVP"
        variants={variant}
        initial="hidden"
        animate={control}
        transition={transition}
      >
        <h3>Confirma tu asistencia y número de acompañantes por Whatsapp:</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nombre}
            placeholder="Nombre Apellido"
            required
            onChange={(e) => setNombre(e.target.value)}
          />
          <hr />
          <button type="submit">
            <FaWhatsapp />
            <span>Confirmar</span>
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default RSVP;
