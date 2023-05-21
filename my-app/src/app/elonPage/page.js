import VideoPlayer from "../../../components/VideoPlayer";
import ChatBar from "../../../components/ChatBar";

export default function Home() {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <VideoPlayer />
      <ChatBar />
    </div>
  );
}
