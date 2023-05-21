"use client";

import React from "react";
import ReactPlayer from "react-player/lazy";

function VideoPlayer({ result }) {
  return (
    <div className="w-9/12 bg-red-300">
      {result === "" ? (
        <img
          src="https://i.imgur.com/fhrwAgp.png"
          alt="Placeholder AI Elon Musk"
          width="650px"
          height="650px"
        />
      ) : (
        <ReactPlayer url={result} width="650px" height="650px" playing />
      )}
    </div>
  );
}

export default VideoPlayer;
