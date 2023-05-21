"use client";

import React, { useEffect } from "react";
import ReactPlayer from "react-player/lazy";

function VideoPlayer({ result }) {
  return (
    <div className="w-9/12 bg-red-300">
      <ReactPlayer url={result} playing />
      <h1>Result: {result}</h1>
      <button
        onClick={() => {
          console.log(result);
        }}
      >
        Check Result
      </button>
    </div>
  );
}

export default VideoPlayer;
