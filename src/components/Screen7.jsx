import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"

export default function Screen7({ portalClone, setSafePlatform, timeout }) {
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
        setSafePlatform(selectedOption)
        setStep(step + 1)
    }

    let safeSide = portalClone == "sides safe" ? ("north safe") : ("boss safe")

    return (
        <div className="screen-7 side-split">
            <div className={timesUp ? ("option west times-up") : ("option west")} onClick={() => handleInput([`west platform`, `${safeSide}`])}>
                <span className="option-name">West</span>
            </div>
            <div className={timesUp ? ("option east times-up") : ("option east")} onClick={() => handleInput([`east platform`, `${safeSide}`])}>
                <span className="option-name">East</span>
            </div>
            {timesUp && <AudioPlayer audio={["/soft ding.mp3"]} />}            
        </div>
    )
}