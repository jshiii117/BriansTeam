"use client";

import VideoPlayer from "../../../components/VideoPlayer";
import ChatBar from "../../../components/ChatBar";
import { useState } from "react";
import { elonImage, elonStartMessage, elonVoice } from "./info";

export default function Home() {
  const [video, setVideo] = useState("");

  const handleSetVideo = (video) => {
    setVideo(video);
  };

  return (
    <div className="flex h-screen overflow-y-hidden">
      <VideoPlayer result={video} image={elonImage} />
      <ChatBar
        updateResult={handleSetVideo}
        image={elonImage}
        startMessage={elonStartMessage}
        voiceId={elonVoice}
      />
    </div>
  );
}
