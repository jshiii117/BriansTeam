"use client";

import React from "react";
import ReactPlayer from "react-player/lazy";

function VideoPlayer({ result, image }) {
  return (
    <div className="w-9/12 bg-red-300">
      {result === "" ? (
        <img src={image} alt="AI Character" width="650px" height="650px" />
      ) : (
        <ReactPlayer url={result} width="650px" height="650px" playing />
      )}
    </div>
  );
}

export default VideoPlayer;
