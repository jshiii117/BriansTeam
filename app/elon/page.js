"use client";

import VideoPlayer from "../../../components/VideoPlayer";
import ChatBar from "../../../components/ChatBar";
import NavBar from "../../../components/NavBar";
import EndCallBTN from "../../../components/EndCallBTN";
import { useState } from "react";
import { elonImage, elonStartMessage, elonVoice } from "./info";
import "./page.css";

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
          <VideoPlayer result={video} image={elonImage} />
          <EndCallBTN></EndCallBTN>
        </div>
      </div>
      <ChatBar
        updateResult={handleSetVideo}
        image={elonImage}
        startMessage={elonStartMessage}
        voiceId={elonVoice}
      />
    </div>
  );
}
