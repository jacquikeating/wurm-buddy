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
        <h1>Blood Mana</h1>
    )
}