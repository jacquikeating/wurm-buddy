import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Screen6({ hourglassLocation, setPortalClone }) {
    const { step, setStep } = useContext(StepContext)

    function handleInput(selectedOption) {
        setPortalClone(selectedOption)
        setStep(step + 1)
    }

    return (
        <div className="screen-6">
            {hourglassLocation == "north" ? ( 
                <>
                    <div className="option" onClick={() => handleInput("sides safe")}>
                        <span className="option-name">North<br />(Hourglass)</span>
                    </div>
                    <div className="option" onClick={() => handleInput("boss safe")}>
                        <span className="option-name">South<br />(Bowtie)</span>
                    </div>
                </>   
            ) : (
                  <>
                    <div className="option" onClick={() => handleInput("boss safe")}>
                        <span className="option-name">North<br />(Bowtie)</span>
                    </div>
                    <div className="option" onClick={() => handleInput("sides safe")}>
                        <span className="option-name">South<br />(Hourglass)</span>
                    </div>
                </>  
            )}
               
        </div>
    )
}