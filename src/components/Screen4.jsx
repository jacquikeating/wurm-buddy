import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"

export default function Screen4({ setFirstMech, timeout }) {
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
        setFirstMech(selectedOption)
        setStep(step + 1)
    }

    return (
        <div className="screen-4">
            <div className={timesUp ? ("option times-up") : ("option")} onClick={() => handleInput("stacks")}>
                <span className="option-name">Stacks First</span>
            </div>
            <div className={timesUp ? ("option times-up") : ("option")} onClick={() => handleInput("defs")}>
                <span className="option-name">Defs First</span>
            </div>
            {timesUp && <AudioPlayer audio={["/soft ding.mp3"]} />}
        </div>
    )
}