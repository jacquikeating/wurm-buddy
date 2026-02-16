import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Screen3({ setHourglassLocation, setStep  }) {

    function handleInput(selectedOption) {
        setHourglassLocation(selectedOption)
        setStep(5)
    }

    return (
        <div className="screen-3">
            <div className="option" onClick={() => handleInput("north")}>
                <span className="option-name">North</span>
            </div>
            <div className="option" onClick={() => handleInput("south")}>
                <span className="option-name">South</span>
            </div>
        </div>
    )
}