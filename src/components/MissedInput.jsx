import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"

export default function MissedInput({   }) {
    const { step, setStep, mechanicVariables, setMechanicVariables } = useContext(StepContext)
    const [display, setDisplay] = useState(true)
    
    if (display) {
        return (
            <div className="missed-input">Missed input!</div>
        )
    } 
}