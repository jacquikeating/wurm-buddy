import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"


export default function BloodMana({ /* setterFunction, timeout */ }) {
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
        // setterFunction(selectedOption)
        setStep(step + 1)
    }

    return (
        <div className="blood-mana side-split">
           <div className="side">
                <div className="option">
                    <span className="option-name">Green/Orange</span>
                </div>
                <div className="option">
                    <span className="option-name">Blue/Purple</span>
                </div>
           </div>
            <div className="side">
                <div className="option">
                    <span className="option-name">Green/Orange</span>
                </div>
                <div className="option">
                    <span className="option-name">Blue/Purple</span>
                </div>
           </div>
            {timesUp && <AudioPlayer audio={["/soft ding.mp3"]} />}            
        </div>
    )
}