"use client";
import { useEffect, useRef, useState } from "react";


export default function Home() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = useRef(new SpeechRecognition())
    const mic = rec.current;
    mic.lang = 'en-CAN';
    mic.continuous = true;
    // mic.interimResults = false;

    const [micOn, setmicOn] = useState(false);
    const [answer,setAnswer] =  useState("");

    mic.onresult = (event) => {
        const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

        setAnswer(transcript)

        mic.onerror = (event) => {
            console.log(event.error);
        };
    }

    useEffect(() => {
        if (micOn) {
            mic.start();
            console.log("started")
        }
        else{
            mic.stop();
            console.log("stopped")
        }
        
    }, [micOn])


    return(
        <div>
            <button onClick={() => setmicOn(!micOn)}>
                {micOn ? "Stop" : "Start"}
            </button>

            <div>
                {answer}
            </div>
        </div>
    )

}