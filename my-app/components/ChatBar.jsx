"use client";

import React from "react";
import ChatBubble from "./ChatBubble";
import TextToSpeechButton from "./TextToSpeechButton";
import { useState } from "react";
import { BiMessage } from "react-icons/Bi";
import { getVideo } from "../api/api";

function ChatBar({ updateResult }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [gptMessages, setGptMessages] = useState([]);

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const handleSubmit = async () => {
    if (currentMessage !== "") {
      console.log(currentMessage);
      const message = {
        role: "user",
        context: currentMessage,
      };
      setGptMessages([...gptMessages, message]);
      setCurrentMessage("");
      const result = await getVideo();
      console.log(`Result: ${result}`);
      updateResult(result);
    }
  };

  const updateMessages = (user_input) => {
    console.log(user_input);
    const message = {
      role: "user",
      context: user_input,
    };
    setGptMessages([...gptMessages, message]);
  };

  return (
    <div className="w-3/12 bg-gray-200 m-12 rounded-md">
      <div className="h-screen flex flex-col">
        <div className="flex flex-1 overflow-y-scroll max-h-[calc(100vh-8rem)] flex-col p-10">
          <div className="flex-grow items-center gap-3 pb-4">
            <div className="flex items-center gap-4">
              <BiMessage size={40} />
              <h1 className="font-bold">Chat</h1>
            </div>
            {/* @todo: fix styling of each ChatBubble */}

            {gptMessages.map(({ role, context }) => {
              return <ChatBubble user={role} text={context} />;
            })}
          </div>
          {/* <!-- Chat messages go here --> */}
          <div class="sticky bottom-0">
            <TextToSpeechButton updateMessage={updateMessages} />
          </div>
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
