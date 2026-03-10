import { useState } from "react"
import AudioPlayer from "./AudioPlayer"

export default function Onboarding({ prefs, setOnboarded }) {
    const setPrefsOpen = prefs[1]
    const [onboardingStep, setOnboardingStep] = useState(1)
    const [playSound, setPlaySound] = useState(false)

    function finishOnboarding() {
        window.open("https://www.youtube.com/watch?v=axQJc2kI3lY", "_blank", 'noopener,noreferrer')
        localStorage.setItem("onboarded", true)
        setOnboarded(true)
    }

    function play() {
        setPlaySound(true)

        setTimeout(() => {
            setPlaySound(false)
        }, 1000)
    }

    function renderContent() {
        if (onboardingStep == 0) {
            return (
                <div className="onboarding">
                    <img src="/worm-icon.svg" alt="A red worm" />
                    <h1>wurm buddy</h1>
                    <button onClick={() => setOnboardingStep(1)}>start ➜</button>
                </div>   
            )
        } else if (onboardingStep == 1) {
            return (
                <div className="onboarding">
                    <div className="header">
                        <img src="/worm-icon.svg" alt="A red worm" />
                        <h1>hi, I'm wurm buddy</h1>
                    </div>
                    <p>I'm a browser-based tool that can help you with rep 2 and idyllic dream.</p>
                    <p>I cannot read your game data. Instead, you will tell me which mechanics you get, and I will use my auto-timers to provide text and audio callouts.</p>
                    <div className="footer">
                        <p>{onboardingStep}/4</p>
                        <button className="next-btn" onClick={() => setOnboardingStep(2)}>➜</button>
                    </div> 
                </div>   
            )
        } else if (onboardingStep == 2) {
            return (
                <div className="onboarding">
                    <div className="header">
                        <h1>how to use</h1>
                    </div>
                    <p>Open me on a second monitor or phone, or use a program to keep me on top, like <a href="https://learn.microsoft.com/en-us/windows/powertoys/">Microsoft PowerToys</a> or an <a href="https://chromewebstore.google.com/detail/always-on-top-window/kmmfdmaiadakelcogiabcebofcgfkdma">extension</a>.</p>
                    <p>Click mechanic options as they become available, and reset (top right) after each pull.</p>
                    <div className="footer">
                        <p>{onboardingStep}/4</p>
                        <button className="next-btn" onClick={() => setOnboardingStep(3)}>➜</button>
                    </div> 
                </div>
            )
        } else if (onboardingStep == 3) {
            return (
                <div className="onboarding">
                    <div className="header">
                        <h1>timing</h1>
                    </div>
                    <p>My timeline will fall behind if you take too long to select options during idyllic.</p>
                    <p>If time is about to run out, the screen will flash and this reminder sound will play.</p>
                    <button className="play-btn" onClick={play}>🕪</button>
                    {playSound && <AudioPlayer audio={["/soft ding.mp3"]} />}
                    <div className="footer">
                        <p>{onboardingStep}/4</p>
                        <button className="next-btn" onClick={() => setOnboardingStep(4)}>➜</button>
                    </div>                 
                </div>
            )
        // } else if (onboardingStep == 4) {
        //     return (
        //         <div className="onboarding">
        //             <div className="header">
        //                 <h1>settings & reset</h1>
        //             </div>
        //             <p>Change your strats, window size, and role in the <button className="secret-btn" onClick={() => setPrefsOpen(true)}>settings</button>.</p>
        //             <p><span>Reset</span> at the end of each pull.</p>
        //             <div className="footer">
        //                 <p>{onboardingStep}/5</p>
        //                 <button className="next-btn" onClick={() => setOnboardingStep(5)}>➜</button>
        //             </div>
        //         </div>
        //     )
        } else if (onboardingStep == 4) {
            return (
                <div className="onboarding">
                    <div className="header">
                        <h1>try me out!</h1>
                    </div>
                    <p>Before you jump into a party, find a PoV video and take me out for a test ride!</p>
                    <p><a href="https://www.youtube.com/watch?v=axQJc2kI3lY" target="_blank">Here's a video</a> using Banana Codex and Uptime DN.</p>
                    <button onClick={finishOnboarding}>let's go! ➜</button>
                    <div className="footer">
                        <p>{onboardingStep}/4</p>
                    </div>
                </div>
            )
        }
    }

    return (
        renderContent()   
    )
}