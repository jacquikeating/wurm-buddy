import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Screen4({ setFirstMech }) {
    const { step, setStep } = useContext(StepContext)

    function handleInput(selectedOption) {
        setFirstMech(selectedOption)
        setStep(step + 1)
    }

    return (
        <div className="screen-4">
            <div className="option" onClick={() => handleInput("stacks")}>
                <span className="option-name">Stacks First</span>
            </div>
            <div className="option" onClick={() => handleInput("defs")}>
                <span className="option-name">Defs First</span>
            </div>
        </div>
    )
}