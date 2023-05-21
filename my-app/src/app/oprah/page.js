"use client";

import VideoPlayer from "../../../components/VideoPlayer";
import ChatBar from "../../../components/ChatBar";
import NavBar from "../../../components/NavBar";
import { useState } from "react";
import { oprahImage, oprahStartMessage, oprahVoice } from "./info";
import EndCallBTN from "../../../components/EndCallBTN";
import './page.css'

export default function Home() {
  const [video, setVideo] = useState("");

  const handleSetVideo = (video) => {
    setVideo(video);
  };

  return (
    <div className="flex h-screen overflow-y-hidden">
      <div className="leftContainer">
        <NavBar></NavBar>
        <div className="innerContainer">
          <VideoPlayer result={video} image={oprahImage} />
          <EndCallBTN></EndCallBTN>
        </div>
      </div>
      <ChatBar
        updateResult={handleSetVideo}
        image={oprahImage}
        startMessage={oprahStartMessage}
        voiceId={oprahVoice}
      />
    </div>
  );
}
