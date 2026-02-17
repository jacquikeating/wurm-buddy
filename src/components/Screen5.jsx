import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Screen5({ setTower }) {
    const { step, setStep } = useContext(StepContext)

    function handleInput(selectedOption) {
        setTower(selectedOption)
        setStep(step + 1)
    }

    return (
        <div className="screen-5">
            <div className="option-row">
                <div className="option fire" onClick={() => handleInput(["left", "fire", "pyretic", "S"])}>
                    <span className="option-name">Fire</span>
                </div>
                <div className="option fire" onClick={() => handleInput(["right", "fire", "pyretic", "S"])}>
                    <span className="option-name">Fire</span>
                </div>
            </div>

            <div className="option-row">
                <div className="option earth" onClick={() => handleInput(["left", "earth", "twister", "S"])}>
                    <span className="option-name">Earth</span>
                </div>
                <div className="option earth" onClick={() => handleInput(["right", "earth", "twister", "S"])}>
                    <span className="option-name">Earth</span>
                </div>
            </div>

            <div className="option-row">
                <div className="option wind" onClick={() => handleInput(["left", "wind", "kb", "mid"])}>
                    <span className="option-name">Wind</span>
                </div>
                <div className="option wind" onClick={() => handleInput(["right", "wind", "kb", "mid"])}>
                    <span className="option-name">Wind</span>
                </div>
            </div>

            <div className="option-row">
                <div className="option dark" onClick={() => handleInput(["left", "dark", "edge", "N"])}>
                    <span className="option-name">Dark</span>
                </div>
                <div className="option dark" onClick={() => handleInput(["right", "dark", "edge", "N"])}>
                    <span className="option-name">Dark</span>
                </div>
            </div>
        </div>
    )
}