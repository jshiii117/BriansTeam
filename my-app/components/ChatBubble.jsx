import React from "react";

function ChatBubble({ user, text }) {
  return (
    <div class="inline-block bg-gray-300 rounded-lg px-4 py-2 m-1 max-w-xs">
      <p class="m-0">{text}</p>
    </div>
  );
}

export default ChatBubble;
