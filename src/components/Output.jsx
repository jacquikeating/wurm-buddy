import { useEffect, useContext, useState } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"

export default function Output({ messages, timeout, audio, delay }) {
    const { step, setStep } = useContext(StepContext)

    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setStep(step + 1)
        }, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [messages])

    useEffect(() => {
        const timer = setTimeout(() => {
            setPlaying(true)
        }, delay)

        return () => {
            clearTimeout(timer)
            setPlaying(false)
        }
    }, [audio])

    return (
        <main className="output">
            <ul>
                {messages.map((message, index) => {
                    return (
                        <li key={index}>{message}</li>
                    )
                })}
            </ul>
            {playing && audio && <AudioPlayer audio={audio} /> }
        </main>
    )
}