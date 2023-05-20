"use client";

import React from "react";
import ChatBubble from "./ChatBubble";
import { useState } from "react";

function ChatBar() {
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSubmit = () => {
    console.log("button clicked");
  };
  return (
    <div className="w-3/12 bg-gray-200 m-12 rounded-md">
      <div class="h-screen flex flex-col">
        <div class="flex-1 overflow-y-auto max-h-[calc(100vh-8rem)]">
          {/* <!-- Chat messages go here --> */}
          <ChatBubble />
          <ChatBubble />
          <ChatBubble />
        </div>
        <div class="bg-white pb-4">
          <div class="flex">
            <input
              type="text"
              placeholder="Type your message..."
              class="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              class="px-4 text-white bg-blue-500 rounded-r-md"
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
