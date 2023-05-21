// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function TextToSpeechButton({ updateMessage }) {
//   componentDidMount() {
//   const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;
//   }
//   const rec = useRef(new SpeechRecognition());
//   const mic = rec.current;
//   mic.lang = "en-CAN";
//   mic.continuous = true;
//   // mic.interimResults = false;

//   const [micOn, setmicOn] = useState(false);
//   // @todo: stop default state "" from showing
//   const [answer, setAnswer] = useState("");

//   useEffect(() => {
//     updateMessage(answer);
//   }, [answer]);

//   mic.onresult = (event) => {
//     const transcript = Array.from(event.results)
//       .map((result) => result[0])
//       .map((result) => result.transcript)
//       .join("");

//     mic.onerror = (event) => {
//       console.log(event.error);
//     };

//     setAnswer(transcript);
//   };

//   useEffect(() => {
//     if (micOn) {
//       mic.start();
//       console.log("started");
//     } else {
//       mic.stop();
//       console.log("stopped");
//     }
//   }, [micOn]);

//   return (
//     <div className="flex-col">
//       <button
//         onClick={() => setmicOn(!micOn)}
//         className={
//           micOn
//             ? "w-full px-4 text-white bg-red-500 rounded-md"
//             : "w-full px-4 text-white bg-blue-500 rounded-md"
//         }
//       >
//         {micOn ? "Stop Mic" : "Start Mic"}
//       </button>
//       <h1>{answer}</h1>
//     </div>
//   );

// }
