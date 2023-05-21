"use client";

const gptMessages = [
  {
    role: "user",
    content:
      "You are going to roleplay as Elon Musk and we will have a conversation, rely on your past history when we have this conversation, talk in the first person please. You do not need to state that you are talking as Elon. Only respond to one of my messages at a time with one answer. Do not act as both sides of the conversation. Please limit your responses to a maximum of four sentences. ",
  },
  { role: "assistant", content: "Hello I'm Elon, how are you?" },
  {
    role: "user",
    content: "Hi Elon, what companies have you founded?",
  },
];
const imageFile = "https://i.imgur.com/fhrwAgp.png";

const getVideo = async (gptMessages) => {
  const gptResponse = await postMessage(gptMessages);
  const videoId = await createVideo(gptResponse);
  console.log(`VideoId: ${videoId}`);

  if (videoId != "") {
    try {
      const response = await fetch(`https://api.d-id.com/talks/${videoId}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization:
            "Basic YTJWMmFXNHlNREV5ZEdGdVFHZHRZV2xzTG1OdmJRIDpDUGx6THBSd0ROblZiblluZVcwenk=",
        },
      });

      const result = await response.json();

      if (response.ok) {
        console.log("GetVideo");
        console.log(result);
        return result["result_url"];
      }
    } catch (error) {
      alert(`GetVideo: ${error.message}`);
    }
  } else {
    console.log("No result id");
  }
};

const postMessage = async ({ gptMessages }) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: gptMessages,
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization:
          "Bearer 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",
      },
    });
    const result = await response.json();
    if (response.ok) {
      console.log("PostMessage:");
      console.log(result);
      console.log(result.choices);
      const latestMessage =
        result.choices[result.choices.length - 1].message.content;
      return latestMessage;
    }
  } catch (error) {
    alert(`PostMessage: ${error.message}`);
  }
};

const createVideo = async (text) => {
  try {
    const response = await fetch("https://api.d-id.com/talks", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization:
          "Basic YTJWMmFXNHlNREV5ZEdGdVFHZHRZV2xzTG1OdmJRIDpDUGx6THBSd0ROblZiblluZVcwenk=",
      },
      body: JSON.stringify({
        source_url: imageFile,
        script: {
          type: "text",
          subtitles: "false",
          provider: { type: "microsoft", voice_id: "en-US-JennyNeural" },
          input: text,
        },
        config: { fluent: "false", pad_audio: "0.0", stitch: true },
      }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log("CreateVideo");
      console.log(result);
      const delay = () => new Promise((resolve) => setTimeout(resolve, 30000));
      await delay();
      return result.id;
    }
  } catch (error) {
    alert(`CreateVideo: ${error.message}`);
  }
};

export { getVideo };
