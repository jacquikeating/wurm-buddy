import { useContext } from "react"
import { StepContext } from "../utils/context.js"

export default function Rep2CloneSelect({ banana, setRep2Clone, role }) {
    const { step, setStep } = useContext(StepContext)

    function handleInput(selectedOption) {
        setRep2Clone(selectedOption)
        setStep(step + 1)
    }

    console.log(`Banana strat: ${banana}`)

    const cloneOptions = [
        // Has to start with east, not north, because of how the CSS renders the buttons in a circle
        {
            location: "E",
            mechanic: "cone",
            group: "east",
            tether: "CW from D",
            initialPos: ["D far right", "(facing wall)"],
            reenactPos1: ["SE max melee", "near clone"],
            reenactPos2: ["D far right", "(facing wall)"]
        },
        {
            location: "SE",
            mechanic: "def",
            group: "east",
            tether: "CW from D",
            initialPos: ["A wall", "slightly S of marker"],
            reenactPos1: ["N boss ring", ""],
            reenactPos2: ["W clone stack", "then E clone stack"]
        },
        {
            location: "S",
            mechanic: "nothing",
            group: "west",
            tether: "avoid tethers",
            initialPos: ["B wall", ""],
            reenactPos1: ["N boss ring", ""],
            reenactPos2: ["W clone stack", "then E clone stack"]
        },
        {
            location: "SW",
            mechanic: "def",
            group: "west",
            tether: "CCW from D",
            initialPos: ["C wall", "slightly S of marker"],
            reenactPos1: ["N boss ring", ""],
            reenactPos2: ["W clone stack", "then E clone stack"]
        },
        {
            location: "W",
            mechanic: "cone",
            group: "west",
            tether: "CCW from D",
            initialPos: ["D far left", "(facing wall)"],
            reenactPos1: ["SW max melee", "near clone"],
            reenactPos2: ["D far left", "(facing wall)"]
        },
        {
            location: "NW",
            mechanic: "stack",
            group: "west",
            tether: "CCW from D",
            initialPos: ["D inner left", "(facing wall)"],
            reenactPos1: ["SW inner ring", "slightly N of gap"],
            reenactPos2: ["D inner left", "(facing wall)"]
        },
        {
            location: "N",
            mechanic: "boss",
            group: "east",
            tether: "boss tether",
            initialPos: ["bait to D", "near bottom of diamond"],
            reenactPos1: ["N boss ring", ""],
            reenactPos2: ["W clone stack", "then E clone stack"]
        },
        {
            location: "NE",
            mechanic: "stack",
            group: "east",
            tether: "CW from D",
            initialPos: ["D inner right", "(facing wall)"],
            reenactPos1: ["SE inner ring", "slightly N of gap"],
            reenactPos2: ["D inner right", "(facing wall)"]
        }
    ]

    const cloneZoneOptions = [
        {
            location: "E",
            mechanic: "stack",
            group: "east",
            tether: "CW from A",
            initialPos: ["A far right", "(facing wall)"],
            reenactPos1: ["A far right", "(facing wall)"],
            reenactPos2: [`${role == "genericMelee" ? "stack E" : "stack W"}`]
        },
        {
            location: "SE",
            mechanic: "def",
            group: "east",
            tether: "CW from A",
            initialPos: ["E wall", "parallel with diamond point"],
            reenactPos1: ["E near/far bait", "be nearest or furthest"],
            reenactPos2: [`${role == "genericMelee" ? "stack E" : "stack W"}`]
        },
        {
            location: "S",
            mechanic: "nothing",
            group: "west",
            tether: "avoid tethers",
            initialPos: ["S wall"],
            reenactPos1: ["W near/far", "don't bait, just stack with baiter"],
            reenactPos2: [`${role == "genericMelee" ? "stack E" : "stack W"}`]
        },
        {
            location: "SW",
            mechanic: "def",
            group: "west",
            tether: "CCW from NW",
            initialPos: ["W wall", "parallel with diamond point"],
            reenactPos1: ["W near/far bait", "be nearest or furthest"],
            reenactPos2: [`${role == "genericMelee" ? "stack E" : "stack W"}`]
        },
        {
            location: "W",
            mechanic: "stack",
            group: "west",
            tether: "CCW from NW",
            initialPos: ["A far left", "(facing wall)"],
            reenactPos1: ["A far left", "(facing wall)"],
            reenactPos2: [`${role == "genericMelee" ? "stack E" : "stack W"}`]
        },
        {
            location: "NW",
            mechanic: "cone",
            group: "west",
            tether: "CCW from NW",
            initialPos: ["A inner left", "(facing wall)"],
            reenactPos1: ["A inner left", "(facing wall)"],
            reenactPos2: [`${role == "genericMelee" ? "stack E" : "stack W"}`]
        },
        {
            location: "N",
            mechanic: "boss",
            group: "east",
            tether: "boss tether",
            initialPos: ["bait to A", "(between A and 1)"], 
            reenactPos1: ["E near/far", "don't bait, just stack with baiter"],
            reenactPos2: [`${role == "genericMelee" ? "stack E" : "stack W"}`]
        },
        {
            location: "NE",
            mechanic: "cone",
            group: "east",
            tether: "CW from A",
            initialPos: ["A inner right", "(facing wall)"],
            reenactPos1: ["A inner right", "(facing wall)"],
            reenactPos2: [`${role == "genericMelee" ? "stack E" : "stack W"}`]
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