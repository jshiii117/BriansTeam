"use client";

import React from "react";
import ChatBubble from "./ChatBubble";
// import TextToSpeechButton from "./TextToSpeechButton";
import { useState } from "react";
// import { BiMessage } from "react-icons/Bi";
import { getVideo } from "../api/api";
import { v4 as uuidv4 } from "uuid";

function ChatBar({ updateResult, image, startMessage, voiceId }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [gptMessages, setGptMessages] = useState(startMessage);

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const handleSubmit = async () => {
    if (currentMessage !== "") {
      console.log(currentMessage);
      const message = {
        role: "user",
        content: currentMessage,
      };
      const newMessages = [...gptMessages, message];
      setGptMessages([...gptMessages, message]);
      const result = await getVideo(newMessages, image, voiceId);
      const video = result.video;
      const updatedMessages = result.gptMessages[0].message;
      console.log(updatedMessages);
      setGptMessages([...newMessages, updatedMessages]);
      updateResult(video);
      setCurrentMessage("");
    }
  };

  // const updateMessages = async (user_input) => {
  //   if (user_input !== "") {
  //     console.log(user_input);
  //     const message = {
  //       role: "user",
  //       content: user_input,
  //     };
  //     const newMessages = [...gptMessages, message];
  //     setGptMessages([...gptMessages, message]);
  //     const result = await getVideo(newMessages, image, voiceId);
  //     const video = result.video;
  //     const updatedMessages = result.gptMessages[0].message;
  //     console.log(updatedMessages);
  //     setGptMessages([...newMessages, updatedMessages]);
  //     updateResult(video);
  //     setCurrentMessage("");
  //   }
  // };

  return (
    <div className="w-4/12 bg-gray-200 m-12 rounded-lg">
      <div className="h-screen flex flex-col">
        <div className="flex flex-1 overflow-y-scroll max-h-[calc(100vh-8rem)] flex-col p-10">
          <div className="flex-grow items-center gap-3 pb-4">
            <div className="flex items-center gap-4">
              {/* <BiMessage size={40} /> */}
              <h1 className="font-bold">Chat</h1>
            </div>
            {/* @todo: fix styling of each ChatBubble */}

            {gptMessages
              .map(({ role, content }) => {
                return <ChatBubble key={uuidv4()} user={role} text={content} />;
              })
              .slice(1)}
          </div>
          {/* <!-- Chat messages go here --> */}
          {/* <div className="sticky bottom-0">
            <TextToSpeechButton updateMessage={updateMessages} />
          </div> */}
        </div>
        <div className="bg-white pb-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={currentMessage}
              onChange={handleInputChange}
            />
            <button
              className="px-4 text-white bg-blue-500 rounded-r-md"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBar;
