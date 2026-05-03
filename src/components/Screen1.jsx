import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"

export default function Screen1({ setCardsOrInters, mechs, timeout }) {
    const { step, setStep } = useContext(StepContext)
    const [timesUp, setTimesUp] = useState(false)

    useEffect(() => {
        if (mechs == "both") {
            const reminderTimer = setTimeout(() => {
                setTimesUp(true)
            }, timeout)

            return () => {
                clearTimeout(reminderTimer)
            }
        }
    }, [])

    function handleInput(selectedOption) {
        setCardsOrInters(selectedOption)
        setStep(step + 1)
    }

    if (mechs == "rep2") {
        return <></>
    }

    return (
        <div className="screen-1">
            <div className="option" onClick={() => handleInput("cards")}>
                <span className="option-name">Cards</span>
            </div>
            <div className="option" onClick={() => handleInput("intercards")}>
                <span className="option-name">Intercards</span>
            </div>
            {timesUp && <AudioPlayer audio={["/soft ding.mp3"]} />}            
        </div>
    )
}