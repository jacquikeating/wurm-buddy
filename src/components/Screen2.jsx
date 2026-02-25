import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"
import AudioPlayer from "./AudioPlayer.jsx"

export default function Screen2({ setMyJob, timeout }) {
    const { step, setStep } = useContext(StepContext)
    const [timesUp, setTimesUp] = useState(false)

    function handleInput(selectedOption) {
        setMyJob(selectedOption)
        setStep(step + 1)
    }

    useEffect(() => {
        const reminderTimer = setTimeout(() => {
            setTimesUp(true)
        }, timeout)

        return () => {
            clearTimeout(reminderTimer)
        }
    }, [])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setMyJob({
    //             location: "?",
    //             quadrant: "?",
    //             mechanic: "?",
    //             group: "?"
    //         })
    //         setStep(step + 1)
    //     }, timeout)

    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [])

    const jobOptions = [
        // Has to start with east, not north, because of how the CSS renders the buttons in a circle
        {
            location: "E",
            quadrant: 3,
            mechanic: "stack",
            group: 2
        },
        {
            location: "SE",
            quadrant: 4,
            mechanic: "stack",
            group: 2
        },
        {
            location: "S",
            quadrant: 1,
            mechanic: "def",
            defNum: 1,
            group: 1
        },
        {
            location: "SW",
            quadrant: 2,
            mechanic: "def",
            defNum: 2,
            group: 1
        },
        {
            location: "W",
            quadrant: 3,
            mechanic: "def",
            defNum: 1,
            group: 2
        },
        {
            location: "NW",
            quadrant: 4,
            mechanic: "def",
            defNum: 2,
            group: 2
        },
        {
            location: "N",
            quadrant: 1,
            mechanic: "stack",
            group: 1
        },
        {
            location: "NE",
            quadrant: 2,
            mechanic: "stack",
            group: 1
        },
    ]

    return (
        <div className="screen-2">
            {jobOptions.map((job, index) => {
                return (
                    <button className={timesUp ? ("clone-button times-up") : ("clone-button")} style={{"--i": index}} key={index} onClick={() => handleInput(job)}>
                        {job.location}
                    </button>
                )
            })}
            {timesUp && <AudioPlayer audio={["/soft ding.mp3"]} />}
        </div>
    )
}