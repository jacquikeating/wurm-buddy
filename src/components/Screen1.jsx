import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Screen1({ setCardsOrInters, mechs }) {
    const { step, setStep } = useContext(StepContext)

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
        </div>
    )
}