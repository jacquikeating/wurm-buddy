import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Rep2CloneSelect({ setRep2Clone }) {
    const { step, setStep } = useContext(StepContext)

    function handleInput(selectedOption) {
        setRep2Clone(selectedOption)
        setStep(step + 1)
    }

    const cloneOptions = [
        // Has to start with east, not north, because of how the CSS renders the buttons in a circle
        {
            location: "E",
            mechanic: "cone",
            group: "east",
            tether: "CW from D"
        },
        {
            location: "SE",
            mechanic: "def",
            group: "east",
            tether: "CW from D"
        },
        {
            location: "S",
            mechanic: "nothing",
            group: "west",
            tether: "avoid tethers"
        },
        {
            location: "SW",
            mechanic: "def",
            group: "west",
            tether: "CCW from D"
        },
        {
            location: "W",
            mechanic: "cone",
            group: "west",
            tether: "CCW from D"
        },
        {
            location: "NW",
            mechanic: "stack",
            group: "west",
            tether: "CCW from D"
        },
        {
            location: "N",
            mechanic: "boss",
            group: "east",
            tether: "boss tether"
        },
        {
            location: "NE",
            mechanic: "stack",
            group: "east",
            tether: "CW from D"
        },
    ]

    return (
        <div className="rep-2">
            {cloneOptions.map((clone, index) => {
                return (
                    <button className={"clone-button"} style={{"--i": index}} key={index} onClick={() => handleInput(clone)}>
                        {clone.location}
                    </button>
                )
            })}
        </div>
    )
}