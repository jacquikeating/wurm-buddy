import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Screen7({ portalClone, setSafePlatform }) {
    const { step, setStep } = useContext(StepContext)

    function handleInput(selectedOption) {
        setSafePlatform(selectedOption)
        setStep(step + 1)
    }

    let safeSide = portalClone == "sides safe" ? ("north safe") : ("boss safe")

    return (
        <div className="screen-7 side-split">
            <div className="option west" onClick={() => handleInput(`west platform, ${safeSide}`)}>
                <span className="option-name">West</span>
            </div>
            <div className="option east" onClick={() => handleInput(`east platform, ${safeSide}`)}>
                <span className="option-name">East</span>
            </div>            
        </div>
    )
}