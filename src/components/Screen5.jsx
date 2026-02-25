import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"

export default function Screen5({ setTower, timeout }) {
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
        setTower(selectedOption)
        setStep(step + 1)
    }

    return (
        <div className="screen-5">
            <div className="option-row">
                <div className={timesUp ? ("option fire times-up") : ("option fire")} onClick={() => handleInput(["left", "fire", "pyretic", "S", "platform edge"])}>
                    <span className="option-name">Fire</span>
                </div>
                <div className={timesUp ? ("option fire times-up") : ("option fire")} onClick={() => handleInput(["right", "fire", "pyretic", "S", "platform edge"])}>
                    <span className="option-name">Fire</span>
                </div>
            </div>

            <div className="option-row">
                <div className={timesUp ? ("option earth times-up") : ("option earth")} onClick={() => handleInput(["left", "earth", "twister", "S", "platform edge"])}>
                    <span className="option-name">Earth</span>
                </div>
                <div className={timesUp ? ("option earth times-up") : ("option earth")} onClick={() => handleInput(["right", "earth", "twister", "S", "platform edge"])}>
                    <span className="option-name">Earth</span>
                </div>
            </div>

            <div className="option-row">
                <div className={timesUp ? ("option wind times-up") : ("option wind")} onClick={() => handleInput(["left", "wind", "kb", "mid", "boss ring"])}>
                    <span className="option-name">Wind</span>
                </div>
                <div className={timesUp ? ("option wind times-up") : ("option wind")} onClick={() => handleInput(["right", "wind", "kb", "mid", "boss ring"])}>
                    <span className="option-name">Wind</span>
                </div>
            </div>

            <div className="option-row">
                <div className={timesUp ? ("option dark times-up") : ("option dark")} onClick={() => handleInput(["left", "dark", "point outside", "N", "boss ring"])}>
                    <span className="option-name">Dark</span>
                </div>
                <div className={timesUp ? ("option dark times-up") : ("option dark")} onClick={() => handleInput(["right", "dark", "point outside", "N", "boss ring"])}>
                    <span className="option-name">Dark</span>
                </div>
            </div>
            {timesUp && <AudioPlayer audio={["/soft ding.mp3"]} />}
        </div>
    )
}