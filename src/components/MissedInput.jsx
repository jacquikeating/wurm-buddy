import { useContext, useEffect, useState } from "react"
import { StepContext } from "../utils/context.js"

export default function MissedInput({   }) {
    const { mechanicVariables, setMechanicVariables } = useContext(StepContext)
    const [display, setDisplay] = useState(false)

    const [step, cardsOrInters, myJob, instructions, hourglassLocation, firstMech, tower, portalClone, safePlatform] = mechanicVariables
    const [setStep, setCardsOrInters, setMyJob, setHourglassLocation, setFirstMech, setTower, setPortalClone, setSafePlatform] = setMechanicVariables

    useEffect(() => {
        if (step == 11 && myJob.location == "?") {
            setDisplay(true)
        }
    }, [step])

    function handleInput(setterFunction, value) {
        setterFunction(value)
        setDisplay(false)
    }

    function renderContent() {
        if (step >= 11 && myJob.location == "?") {
            return (
                <div className="clone-select-container">
                    <h2>Select clone:</h2>
                    <div className="clone-select-group">
                        <button className="fallback-clone-btn" onClick={() => handleInput(setMyJob, {location: "N", quadrant: 1, mechanic: "stack", group: 1})}>N</button>
                        <button className="fallback-clone-btn" onClick={() => handleInput(setMyJob, {location: "NE", quadrant: 2, mechanic: "stack", group: 1})}>NE</button>
                        <button className="fallback-clone-btn" onClick={() => handleInput(setMyJob, {location: "E", quadrant: 3, mechanic: "stack", group: 2})}>E</button>
                        <button className="fallback-clone-btn" onClick={() => handleInput(setMyJob, {location: "SE", quadrant: 4, mechanic: "stack", group: 2})}>SE</button>
                    </div>
                    <div className="clone-select-group">
                        <button className="fallback-clone-btn" onClick={() => handleInput(setMyJob, {location: "S", quadrant: 1, mechanic: "def", defNum: 1, group: 1})}>S</button>
                        <button className="fallback-clone-btn" onClick={() => handleInput(setMyJob, {location: "SW", quadrant: 2, mechanic: "def", defNum: 2, group: 1})}>SW</button>
                        <button className="fallback-clone-btn" onClick={() => handleInput(setMyJob, {location: "W", quadrant: 3, mechanic: "def", defNum: 1, group: 2})}>W</button>
                        <button className="fallback-clone-btn" onClick={() => handleInput(setMyJob, {location: "NW", quadrant: 4, mechanic: "def", defNum: 2, group: 2})}>NW</button>
                    </div>
                </div>     
            )
        }        
    }
    
    if (display) {
        return (
            <div className="missed-input">
                {renderContent()}
            </div>
        )
    } 
}