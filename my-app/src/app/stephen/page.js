"use client";

import VideoPlayer from "../../../components/VideoPlayer";
import ChatBar from "../../../components/ChatBar";
import { useState } from "react";
import { stephenImage, stephenStartMessage, stephenVoice } from "./info";

export default function Home() {
  const [video, setVideo] = useState("");

  const handleSetVideo = (video) => {
    setVideo(video);
  };

  return (
    <div className="flex h-screen overflow-y-hidden">
      <VideoPlayer result={video} image={stephenImage} />
      <ChatBar
        updateResult={handleSetVideo}
        image={stephenImage}
        startMessage={stephenStartMessage}
        voiceId={stephenVoice}
      />
    </div>
  );
}
