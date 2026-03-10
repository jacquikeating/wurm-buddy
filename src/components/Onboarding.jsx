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
        }
    }

    return (
        renderContent()   
    )
}