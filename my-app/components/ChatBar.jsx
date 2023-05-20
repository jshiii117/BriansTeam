"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";

function ChatBar() {
  return (
    <div class="fixed right-0 bottom-0 w-3/12 h-screen bg-gray-200 flex flex-col">
      <div class="flex-1 p-4 overflow-y-auto">
        {/* <!-- Chat messages go here --> */}
      </div>
      <div class="p-4 bg-white">
        <div class="flex">
          <input
            type="text"
            placeholder="Type your message..."
            class="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button class="px-4 text-white bg-blue-500 rounded-r-md">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBar;
