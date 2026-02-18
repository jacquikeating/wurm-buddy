import MenuBar from "./MenuBar"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
import Screen5 from "./Screen5"
import Screen6 from "./Screen6"
import Screen7 from "./Screen7"
import Output from "./Output"
import { getFirstMessage, getStackDefInstructions } from "../utils/functions"
import { StepContext } from "../utils/context.js"
import { useState, useEffect } from "react"

export default function MainContainer() {
    // // PREFILLED VARIABLES FOR TIMELINE DEVELOPMENT PURPOSES
    // const [step, setStep] = useState(21)
    // const [uptime, setUptime] = useState(true)
    // const [cardsOrInters, setCardsOrInters] = useState("cards")
    // const [myJob, setMyJob] = useState({
    //         location: "SE",
    //         quadrant: 4,
    //         mechanic: "stack",
    //         group: 2
    //     })
    // const [instructions, setInstructions] = useState(["", "", "", "", ""])
    // const [hourglassLocation, setHourglassLocation] = useState("south")
    // const [firstMech, setFirstMech] = useState("defs")
    // const [tower, setTower] = useState(["left", "fire", "pyretic", "S"])
    // const [portalClone, setPortalClone] = useState("sides safe")
    // const [safePlatform, setSafePlatform] = useState("west platform, north safe")

    // DEFAULT EMPTY VARIABLES - USE WHILE NOT ACTIVELY DEVELOPING TIMELINE
    const [step, setStep] = useState(1)
    const [uptime, setUptime] = useState(true)
    const [cardsOrInters, setCardsOrInters] = useState(null)
    const [myJob, setMyJob] = useState(null)
    const [instructions, setInstructions] = useState(["", "", "", "", ""])
    const [hourglassLocation, setHourglassLocation] = useState(null)
    const [firstMech, setFirstMech] = useState(null)
    const [tower, setTower] = useState(["", "", "", ""])
    const [portalClone, setPortalClone] = useState(null)
    const [safePlatform, setSafePlatform] = useState(null)

    let outputMessages = [
        [`${myJob?.quadrant}`, `${getFirstMessage(uptime, myJob)}`],
        [`${myJob?.quadrant} ${myJob?.mechanic}`],
        [`${hourglassLocation || "?"}`, `eprog`],
        [`east`, `late kera`, `ixo eprog`],
        [`phys phil eprog`, `${instructions[1]} after`],
        [`${instructions[1]}`, `pan zoe kera`],
        [`${instructions[2]}`, `${firstMech == "stacks" ? ("eprog holos") : ("top-up")}`],
        [`${instructions[3]}`, `${firstMech == "stacks" ? ("top-up") : ("eprog holos")}`],
        [`${instructions[4]}`, `${firstMech == "stacks" ? ("eprog ixo") : ("top-up")}`],
        [`east`, `${firstMech == "stacks" ? ("top-up") : ("eprog ixo")}`],
        [`${tower[0]}`, `${tower[2]}`],
        [`esuna`, `${tower[3]}`],
        [`${tower[3]}`],
        [`${cardsOrInters}`, `eprog kera`],
        [`${safePlatform}`, `ixo`],
        [`${cardsOrInters == "cards" ? ("inters") : ("cards")}`, `eprog`],
        [`${portalClone}`, `eprog kera`],
        [`pot soon!`],
        [`phys eprog holos`, `zoe eprog`],
        [`pan kera`]
    ]

    useEffect(() => {
        firstMech && setInstructions(getStackDefInstructions(uptime, myJob, firstMech))
    }, [firstMech])

    function renderContent() {
        switch (step) {
            case 1: return <Screen1 setCardsOrInters={setCardsOrInters} />;
            case 2: return <Screen2 setMyJob={setMyJob} />;
            case 3: return <Output messages={outputMessages[0]} timeout={20000} />;
            case 4: return <Screen3 setHourglassLocation={setHourglassLocation} />;
            case 5: return <Output messages={outputMessages[1]} timeout={20000} />;
            case 6: return <Screen4 setFirstMech={setFirstMech} />;
            case 7: return <Output messages={outputMessages[2]} timeout={10000} />;
            case 8: return <Output messages={outputMessages[3]} timeout={10000} />;
            case 9: return <Screen5 setTower={setTower} />;
            case 10: return <Output messages={outputMessages[4]} timeout={6000} />; // after tower
            case 11: return <Output messages={outputMessages[5]} timeout={6000} />; // running to first mech
            case 12: return <Output messages={outputMessages[6]} timeout={5000} />; // btwn 1st and 2nd
            case 13: return <Output messages={outputMessages[7]} timeout={5000} />; // btwn 2nd and 3rd
            case 14: return <Output messages={outputMessages[8]} timeout={6000} />; // btwn 3rd and 4th
            case 15: return <Output messages={outputMessages[9]} timeout={5000} />; // otw to tower spots
            case 16: return <Output messages={outputMessages[10]} timeout={8000} />; // tower type
            case 17: return <Output messages={outputMessages[11]} timeout={5000} />; // esuna & spread spot
            case 18: return <Output messages={outputMessages[12]} timeout={6000} />; // just spread spot
            case 19: return <Output messages={[` `]} timeout={9000} />; // chilling waiting for clones
            case 20: return <Screen6 hourglassLocation={hourglassLocation} setPortalClone={setPortalClone} />;
            case 21: return <Screen7 portalClone={portalClone} setSafePlatform={setSafePlatform} />;
            case 22: return <Output messages={outputMessages[13]} timeout={12000} />; // where to go for first stacks
            case 23: return <Output messages={outputMessages[14]} timeout={12000} />; // safe platform
            case 24: return <Output messages={outputMessages[15]} timeout={10000} />; // second stacks
            case 25: return <Output messages={outputMessages[16]} timeout={12000} />; // portal clone --> castbar damage
            case 26: return <Output messages={[` `]} timeout={7000} />; // just hit boss time
            case 27: return <Output messages={outputMessages[17]} timeout={18000} />; // pot reminder for 8:00 burst
            case 28: return <Output messages={[` `]} timeout={10000} />; // just hit boss time
            case 29: return <Output messages={outputMessages[18]} timeout={10000} />; // arcadian hell 1
            case 30: return <Output messages={outputMessages[19]} timeout={20000} />; // arcadian hell 2
        }
    }

    return (
        <StepContext.Provider value={{ step, setStep }}>
            <div className="container">
                <MenuBar uptime={uptime} setUptime={setUptime} />
                <main>
                    {renderContent()}
                </main>
            </div>
        </StepContext.Provider>
    )
}