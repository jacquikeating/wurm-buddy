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
                <div className="option" onClick={() => handleInput(["E", "green orange", "W", "E"])}>
                    <span className="option-name">Green/Orange<br />West</span>
                    <div className="dots">
                        <div className="dot green"></div>
                        <div className="dot orange"></div>
                    </div>
                </div>
                <div className="option" onClick={() => handleInput(["E", "blue purple", "E", "W"])}>
                    <span className="option-name">Blue/Purple<br />West</span>
                    <div className="dots">
                        <div className="dot blue"></div>
                        <div className="dot purple"></div>
                    </div>
                </div>
           </div>
            <div className="side">
                <div className="option" onClick={() => handleInput(["W", "green orange", "E", "W"])}>
                    <span className="option-name">Green/Orange<br />East</span>
                    <div className="dots">
                        <div className="dot orange"></div>
                        <div className="dot green"></div>
                    </div>
                </div>
                <div className="option" onClick={() => handleInput(["W", "blue purple", "W", "E"])}>
                    <span className="option-name">Blue/Purple<br />East</span>
                    <div className="dots">
                        <div className="dot purple"></div>
                        <div className="dot blue"></div>
                    </div>
                </div>
           </div>
            {timesUp && <AudioPlayer audio={["/soft ding.mp3"]} />}            
        </div>
    )
}