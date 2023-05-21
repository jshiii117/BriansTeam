"use client";

import React from "react";
import ReactPlayer from "react-player/lazy";
import './styling/VideoPlayer.css'

function VideoPlayer({ result, image }) {
  return (
    <div className="container">
      {result === "" ? (
        <img src={image} alt="AI Character" className="image"/>
      ) : (
        <ReactPlayer url={result} width="650px" height="650px" playing />
      )}
    </div>
  );
}

export default VideoPlayer;
