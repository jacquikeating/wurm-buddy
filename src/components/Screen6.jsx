import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"

export default function Screen6({ hourglassLocation, setPortalClone, timeout }) {
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
        setPortalClone(selectedOption)
        setStep(step + 1)
    }

    return (
        <div className="screen-6">
            {hourglassLocation == "north" ? ( 
                <>
                    <div className={timesUp ? ("option times-up") : ("option")} onClick={() => handleInput("sides safe")}>
                        <span className="option-name">North<br />(Hourglass)</span>
                    </div>
                    <div className={timesUp ? ("option times-up") : ("option")} onClick={() => handleInput("boss safe")}>
                        <span className="option-name">South<br />(Bowtie)</span>
                    </div>
                </>   
            ) : (
                  <>
                    <div className={timesUp ? ("option times-up") : ("option")} onClick={() => handleInput("boss safe")}>
                        <span className="option-name">North<br />(Bowtie)</span>
                    </div>
                    <div className={timesUp ? ("option times-up") : ("option")} onClick={() => handleInput("sides safe")}>
                        <span className="option-name">South<br />(Hourglass)</span>
                    </div>
                </>  
            )}
            {timesUp && <AudioPlayer audio={["/soft ding.mp3"]} />}
        </div>
    )
}