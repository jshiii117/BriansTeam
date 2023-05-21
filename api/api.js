"use client";

const getVideo = async (gptMessages, image, voiceId) => {
  console.log(`Messages in getVideo: ${gptMessages}`);
  const allGptMessage = await postMessage(gptMessages);
  const latestGptMessage =
    allGptMessage[allGptMessage.length - 1].message.content;
  const videoId = await createVideo(latestGptMessage, image, voiceId);
  console.log(`VideoId: ${videoId}`);

  if (videoId != "") {
    try {
      const response = await fetch(`https://api.d-id.com/talks/${videoId}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: process.env.NEXT_PUBLIC_DIDI_API_KEY,
        },
      });

      const result = await response.json();

      if (response.ok) {
        console.log("GetVideo");
        console.log(result);
        return { video: result["result_url"], gptMessages: allGptMessage };
      }
    } catch (error) {
      alert(`GetVideo: ${error.message}`);
    }
  } else {
    console.log("No result id");
  }
};

const postMessage = async (gptMessages) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: gptMessages,
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      },
    });
    const result = await response.json();
    if (response.ok) {
      console.log("PostMessage:");
      console.log(result);
      console.log(result.choices);
      // const latestMessage =
      //   result.choices[result.choices.length - 1].message.content;
      // return latestMessage;
      const allMessages = result.choices;
      return allMessages;
    }
  } catch (error) {
    alert(`PostMessage: ${error.message}`);
  }
};

const createVideo = async (text, image, voiceId) => {
  try {
    const response = await fetch("https://api.d-id.com/talks", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: process.env.NEXT_PUBLIC_DIDI_API_KEY,
      },
      body: JSON.stringify({
        source_url: image,
        script: {
          type: "text",
          subtitles: "false",
          provider: { type: "microsoft", voice_id: voiceId },
          input: text,
        },
        config: { fluent: "false", pad_audio: "0.0", stitch: true },
      }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log("CreateVideo");
      console.log(result);
      const delay = () => new Promise((resolve) => setTimeout(resolve, 20000));
      await delay();
      if (result.duration >= 16) {
        console.log("Hello Im running another delay");
        const delay = () =>
          new Promise((resolve) => setTimeout(resolve, 15000));
        await delay();
        console.log("Delay ended");
      }
      return result.id;
    }
  } catch (error) {
    alert(`CreateVideo: ${error.message}`);
  }
};

export { getVideo };
