"use client";

import VideoPlayer from "../../../components/VideoPlayer";
import ChatBar from "../../../components/ChatBar";
import { useState } from "react";

const elonImage = "https://i.imgur.com/fhrwAgp.png";

const elonStartMessage = [
  {
    role: "user",
    content:
      "You are going to roleplay as Elon Musk and we will have a conversation, rely on your past history when we have this conversation, talk in the first person please. You do not need to state that you are talking as Elon. Only respond to one of my messages at a time with one answer. Do not act as both sides of the conversation. Please limit your responses to a maximum of four sentences. ",
  },
  { role: "assistant", content: "Hello I'm Elon, how are you?" },
  { role: "assistant", content: "Let's chat!" },
];

const elonVoice = "en-US-SteffanNeural";

// export { elonImage, elonStartMessage, elonVoice };

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
