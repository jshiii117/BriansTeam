"use client";

import React from "react";
import ChatBubble from "./ChatBubble";
import TextToSpeechButton from "./TextToSpeechButton";
import { useState } from "react";
import { BiMessage } from "react-icons/Bi";

function ChatBar() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentMessages, setCurrentMessages] = useState([]);

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (currentMessage !== "") {
      console.log(currentMessage);
      const message = {
        user: true,
        id: currentMessages.length,
        text: currentMessage,
      };
      setCurrentMessages([...currentMessages, message]);
      setCurrentMessage("");
    }
  };

  const updateMessages = (user_input) => {
    console.log(user_input);
    const message = {
      user: true,
      id: currentMessages.length,
      text: user_input,
    };
    setCurrentMessages([...currentMessages, message]);
  };

  return (
    <div className="w-3/12 bg-gray-200 m-12 rounded-md">
      <div class="h-screen flex flex-col">
        <div className="flex flex-1 overflow-y-scroll max-h-[calc(100vh-8rem)] flex-col p-10">
          <div className="flex-grow items-center gap-3 pb-4">
            <div className="flex items-center gap-4">
              <BiMessage size={40} />
              <h1 className="font-bold">Chat</h1>
            </div>
            <div>
              {/* <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
              <ChatBubble
                user={true}
                text={
                  "dfghajsk dvhjaskhlf jbvaslhkfj  hvaslhfjbhbjask ljbfjka jlshbflj ahsb"
                }
              />
             */}
            </div>

            {currentMessages.map(({ user, text }) => {
              return <ChatBubble user={user} text={text} />;
            })}
          </div>
          {/* <!-- Chat messages go here --> */}
          <div class="sticky bottom-0">
            <TextToSpeechButton updateMessage={updateMessages} />
          </div>
        </div>
        <div class="bg-white pb-4">
          <div class="flex">
            <input
              type="text"
              placeholder="Type your message..."
              class="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={currentMessage}
              onChange={handleInputChange}
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
