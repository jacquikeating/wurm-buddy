import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Rep2CloneSelect({  }) {
    const { step, setStep } = useContext(StepContext)

    function handleInput(selectedOption) {
        // setRep2Clone(selectedOption)
        console.log(selectedOption)
        setStep(step + 1)
    }

    const cloneOptions = [
        // Has to start with east, not north, because of how the CSS renders the buttons in a circle
        {
            location: "E",
            mechanic: "cone",
            group: "east"
        },
        {
            location: "SE",
            mechanic: "def",
            group: "east"
        },
        {
            location: "S",
            mechanic: "nothing",
            group: "west"
        },
        {
            location: "SW",
            mechanic: "def",
            group: "west"
        },
        {
            location: "W",
            mechanic: "cone",
            group: "west"
        },
        {
            location: "NW",
            mechanic: "stack",
            group: "west"
        },
        {
            location: "N",
            mechanic: "boss",
            group: "east"
        },
        {
            location: "NE",
            mechanic: "stack",
            group: "east"
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