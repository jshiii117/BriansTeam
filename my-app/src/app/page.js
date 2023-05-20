import Image from "next/image";
import styles from "./page.module.css";
import VideoPlayer from "../../components/VideoPlayer";
import ChatBar from "../../components/ChatBar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <VideoPlayer />
      <ChatBar />
    </div>
  );
}
