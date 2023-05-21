import React from "react";

function ChatBubble({ user, text }) {
  return (
    <div
      className={
        user === "user"
          ? "inline-block rounded-lg px-4 py-2 m-1 flex-wrap bg-[#1673E9]"
          : "inline-block rounded-lg px-4 py-2 m-1 flex-wrap bg-[#484A56]"
      }
    >
      <p className="m-0 text-white">{text}</p>
    </div>
  );
}

export default ChatBubble;
