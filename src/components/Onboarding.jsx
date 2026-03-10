import { useState } from "react"

export default function Onboarding({ prefs, setOnboarded }) {
    const setPrefsOpen = prefs[1]
    const [onboardingStep, setOnboardingStep] = useState(1)

    function finishOnboarding() {
        localStorage.setItem("onboarded", true)
        setOnboarded(true)
    }

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
        } else if (onboardingStep == 3) {
            return (
                <div className="onboarding">
                    <div className="header">
                        <h1>how to use</h1>
                    </div>
                    <p>Open me on a second monitor, phone, or use a program to keep this window on top (such as <a href="https://learn.microsoft.com/en-us/windows/powertoys/">Microsoft PowerToys</a>, or a <a href="https://chromewebstore.google.com/detail/always-on-top-window/kmmfdmaiadakelcogiabcebofcgfkdma">browser extension</a>).</p>
                    <p>Click mechanic options as they become available, and my automated timeline will guide you along.</p>
                    <button className="next-btn" onClick={() => setOnboardingStep(4)}>➜</button>
                </div>
            )
        } else if (onboardingStep == 4) {
            return (
                <div className="onboarding">
                    <div className="header">
                        <h1>settings & reset</h1>
                    </div>
                    <p>Change your strats, window size, and role in the <button className="secret-btn" onClick={() => setPrefsOpen(true)}>settings</button>.</p>
                    <p><span>Reset</span> at the end of each pull.</p>
                    <button className="next-btn" onClick={() => setOnboardingStep(5)}>➜</button>
                </div>
            )
        } else if (onboardingStep == 5) {
            return (
                <div className="onboarding">
                    <div className="header">
                        <h1>try me out!</h1>
                    </div>
                    <p>Before you jump into a party, find a PoV video and take me out for a test ride!</p>
                    <p><a href="" target="_blank">Here's a video</a> using Banana Codex and Uptime DN.</p>
                    <button onClick={finishOnboarding}>let's go! ➜</button>
                </div>
            )
        }
    }

    return (
        renderContent()   
    )
}