import React from "react";

import "./AudioPlayer.css";

const AudioPlayer = () => {
  return (
    <div className="audioPlayerContainer">
      <audio
        src="https://assets.codepen.io/4358584/Anitek_-_Komorebi.mp3"
        preload="metadata"
        loop
        controls
      />
    </div>
  );
};

export default AudioPlayer;
