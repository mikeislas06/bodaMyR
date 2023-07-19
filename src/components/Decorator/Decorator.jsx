import React from "react";

import decorator from "../../assets/decorator.png";
import "./Decorator.css";

const Decorator = () => {
  return (
    <div className="decoratorContainer">
      <img src={decorator} alt="decorator" />
    </div>
  );
};

export default Decorator;
