import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"


export default function BloodMana({ setBloodMana /* , timeout */ }) {
    const { step, setStep } = useContext(StepContext)
    const [timesUp, setTimesUp] = useState(false)

    // useEffect(() => {
    //     const reminderTimer = setTimeout(() => {
    //         setTimesUp(true)
    //     }, timeout)

    //     return () => {
    //         clearTimeout(reminderTimer)
    //     }
    // }, [])

    function handleInput(selectedOption) {
        setBloodMana(selectedOption)
        setStep(step + 1)
    }

    return (
        <div className="blood-mana side-split">
           <div className="side">
                <div className="option" onClick={() => handleInput(["W", "E"])}>
                    <span className="option-name">Green/Orange</span>
                    <div className="dots">
                        <div className="dot green"></div>
                        <div className="dot orange"></div>
                    </div>
                </div>
                <div className="option" onClick={() => handleInput(["E", "W"])}>
                    <span className="option-name">Blue/Purple</span>
                    <div className="dots">
                        <div className="dot blue"></div>
                        <div className="dot purple"></div>
                    </div>
                </div>
           </div>
            <div className="side">
                <div className="option" onClick={() => handleInput(["E", "W"])}>
                    <span className="option-name">Green/Orange</span>
                    <div className="dots">
                        <div className="dot green"></div>
                        <div className="dot orange"></div>
                    </div>
                </div>
                <div className="option" onClick={() => handleInput(["W", "E"])}>
                    <span className="option-name">Blue/Purple</span>
                    <div className="dots">
                        <div className="dot blue"></div>
                        <div className="dot purple"></div>
                    </div>
                </div>
           </div>
            {timesUp && <AudioPlayer audio={["/soft ding.mp3"]} />}            
        </div>
    )
}