import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"

export default function Screen3({ setHourglassLocation, timeout }) {
    const { step, setStep } = useContext(StepContext)
    const [timesUp, setTimesUp] = useState(false)

    useEffect(() => {
        const reminderTimer = setTimeout(() => {
            setTimesUp(true)
        }, timeout)

        return () => {
            clearTimeout(reminderTimer)
        }
    }, [])

    function handleInput(selectedOption) {
        setHourglassLocation(selectedOption)
        setStep(step + 1)
    }

    return (
        <div className="screen-3">
            <div className={timesUp ? ("option times-up") : ("option")} onClick={() => handleInput("north")}>
                <span className="option-name">North</span>
            </div>
            <div className={timesUp ? ("option times-up") : ("option")} onClick={() => handleInput("south")}>
                <span className="option-name">South</span>
            </div>
            {timesUp && <AudioPlayer audio={["/soft ding.mp3"]} />}
        </div>
    )
}