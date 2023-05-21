"use client";

import VideoPlayer from "../../components/VideoPlayer";
import ChatBar from "../../components/ChatBar";
import { useState } from "react";
import { oprahImage, oprahStartMessage, oprahVoice } from "./info";

export default function Home() {
  const [video, setVideo] = useState("");

  const handleSetVideo = (video) => {
    setVideo(video);
  };

  return (
    <div className="flex h-screen overflow-y-hidden">
      <VideoPlayer result={video} image={oprahImage} />
      <ChatBar
        updateResult={handleSetVideo}
        image={oprahImage}
        startMessage={oprahStartMessage}
        voiceId={oprahVoice}
      />
    </div>
  );
}
