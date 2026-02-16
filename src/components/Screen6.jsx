import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Screen6({ hourglassLocation, setPortalClone }) {
    const { step, setStep } = useContext(StepContext)

    function handleInput(selectedOption) {
        setPortalClone(selectedOption)
        setStep(9)
    }

    return (
        <div className="screen-6">
            {hourglassLocation == "north" ? ( 
                <>
                    <div className="option" onClick={() => handleInput("sides safe")}>
                        <span className="option-name">North (Hourglass)</span>
                    </div>
                    <div className="option" onClick={() => handleInput("boss safe")}>
                        <span className="option-name">South (Bowtie)</span>
                    </div>
                </>   
            ) : (
                  <>
                    <div className="option" onClick={() => handleInput("boss safe")}>
                        <span className="option-name">North (Bowtie)</span>
                    </div>
                    <div className="option" onClick={() => handleInput("sides safe")}>
                        <span className="option-name">South (Hourglass)</span>
                    </div>
                </>  
            )}
               
        </div>
    )
}