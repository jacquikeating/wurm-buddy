import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Screen7({ portalClone, setSafePlatform }) {
    const { step, setStep } = useContext(StepContext)

    function handleInput(selectedOption) {
        setSafePlatform(selectedOption)
        setStep(10)
    }

    let safeSide = portalClone == "sides safe" ? ("north safe") : ("boss safe")

    return (
        <div className="screen-7 side-split">
            <div className="option" onClick={() => handleInput(`west platform, ${safeSide}`)}>
                <span className="option-name">West</span>
            </div>
            <div className="option" onClick={() => handleInput(`east platform, ${safeSide}`)}>
                <span className="option-name">East</span>
            </div>            
        </div>
    )
}