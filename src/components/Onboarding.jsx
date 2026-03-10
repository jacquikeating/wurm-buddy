import { useState } from "react"

export default function Onboarding() {
    const [onboardingStep, setOnboardingStep] = useState(1)

    function renderContent() {
        if (onboardingStep == 1) {
            return (
                <div className="onboarding">
                    <img src="/worm-icon.svg" alt="A red worm" />
                    <h1>wurm buddy</h1>
                    <button onClick={() => setOnboardingStep(2)}>start ➜</button>
                </div>   
            )
        } else if (onboardingStep == 2) {
            return (
                <div className="onboarding">
                    <div className="header">
                        <img src="/worm-icon.svg" alt="A red worm" />
                        <h1>hi, I'm wurm buddy</h1>
                    </div>
                    <p>I'm a browser-based tool that can help you with rep 2 and idyllic dream.</p>
                    <p>I cannot read your game data. Instead, you will tell me which mechanics you get, and I will provide callouts.</p>
                    <button className="next-btn" onClick={() => setOnboardingStep(3)}>➜</button>
                </div>   
            )
        }
    }

    return (
        renderContent()   
    )
}