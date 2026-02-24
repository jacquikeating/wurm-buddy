import { useEffect, useContext } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"

export default function Output({ messages, timeout, audio }) {
    const { step, setStep } = useContext(StepContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setStep(step + 1)
        }, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [messages])

    return (
        <main className="output">
            <ul>
                {messages.map((message, index) => {
                    return (
                        <li key={index}>{message}</li>
                    )
                })}
            </ul>
            {audio && <AudioPlayer audio={audio} /> }
        </main>
    )
}