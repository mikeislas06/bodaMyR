import React from "react";

import song from "../../assets/song.mp3";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  return (
    <div className="audioPlayerContainer">
      <audio src={song} preload="metadata" loop controls />
    </div>
  );
};

export default AudioPlayer;
