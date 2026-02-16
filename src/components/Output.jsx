export default function Output({ messages, timeout, setStep }) {

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