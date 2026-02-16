import { useEffect } from "react"

export default function Output({ messages, timeout, step, setStep }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setStep(step + 1);
        }, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [])

    return (
        <main>
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