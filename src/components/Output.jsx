import { useEffect, useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Output({ messages, timeout }) {
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
        </main>
    )
}