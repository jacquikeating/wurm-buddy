import MenuBar from "./MenuBar"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
import Screen5 from "./Screen5"
import Screen6 from "./Screen6"
import Screen7 from "./Screen7"
import SummaryScreen from "./SummaryScreen"
import Output from "./Output"
import { getStackDefInstructions } from "../utils/functions"
import { useState, useEffect } from "react"

export default function MainContainer() {
    const [step, setStep] = useState(1)
    const [uptime, setUptime] = useState(true)
    const [cardsOrInters, setCardsOrInters] = useState(null)
    const [myJob, setMyJob] = useState(null)
    const [instructions, setInstructions] = useState(null)
    const [hourglassLocation, setHourglassLocation] = useState(null)
    const [firstMech, setFirstMech] = useState(null)
    const [tower, setTower] = useState(null)
    const [portalClone, setPortalClone] = useState(null)
    const [safePlatform, setSafePlatform] = useState(null)
    let summary = {
        quadrant: myJob?.quadrant,
        hourglass: hourglassLocation,
        tetherType: myJob?.mechanic,
        firstMech: firstMech,
        instructions: instructions,
        tower: tower,
        cardsOrInters: cardsOrInters,
        safePlatform: safePlatform,
        portalClone: portalClone
    }

    let outputMessages = [
        [`${myJob?.quadrant}`, `${myJob?.group == 1 ? "east" : "west"} ${myJob?.mechanic} ${myJob?.defNum || ""} later`],
        [`${myJob?.mechanic}`],
        [`${hourglassLocation || "?"}`, `eprog`],
        [`East`, `late kera`, `ixo eprog`],
        
    ]

    // let outputMessagesLong = [
    //     [`Go to ${myJob?.quadrant}`, `I will be ${myJob?.group == 1 ? "east" : "west"} ${myJob?.mechanic} ${myJob?.defNum || ""}`],
    //     [`Take ${myJob?.mechanic} tether`],
    //     [`${hourglassLocation || "?"} safe`, `eprog`],
    //     [`East platform`, `late kera`, `ixo eprog`],
        
    // ]

    useEffect(() => {
        firstMech && setInstructions(getStackDefInstructions(uptime, myJob, firstMech))
    }, [myJob, uptime, firstMech])

    function renderContent() {
        switch (step) {
            case 1: return <Screen1 setCardsOrInters={setCardsOrInters} setStep={setStep} />;
            case 2: return <Screen2 setMyJob={setMyJob} setStep={setStep} />;
            case 3: return <Output messages={["test 1", "test 2"]} timeout={5000} step={step} setStep={setStep} />;
            case 4: return <Screen3 setHourglassLocation={setHourglassLocation} setStep={setStep} />;
            case 5: return <SummaryScreen summary={summary} />;
            case 6: return <Screen4 setFirstMech={setFirstMech} setStep={setStep} />;
            case 7: return <Screen5 setTower={setTower} setStep={setStep} />;
        }
        // if (step == 1) {
        //     return <Screen1 setCardsOrInters={setCardsOrInters} setStep={setStep} />
        // } else if (step == 2) {
        //     return <Screen2 setMyJob={setMyJob} setStep={setStep} />
        // } else if (!hourglassLocation) {
        //     return <Screen3 setHourglassLocation={setHourglassLocation} setStep={setStep} />
        // } else if (!firstMech) {
        //     return <Screen4 setFirstMech={setFirstMech} setStep={setStep} />
        // } else if (!tower) {
        //     return <Screen5 setTower={setTower} setStep={setStep} />
        // } else if (!portalClone) {
        //     return <Screen6 setPortalClone={setPortalClone} hourglassLocation={hourglassLocation} setStep={setStep} />
        // } else if (!safePlatform) {
        //     return <Screen7 setSafePlatform={setSafePlatform} portalClone={portalClone} setStep={setStep} />
        //  }
    }

    

    return (
        <div className="container">
            <MenuBar uptime={uptime} setUptime={setUptime} />
            {/* <SummaryScreen summary={summary} /> */}
            <main>
                {renderContent()}
            </main>
        </div>
    )
}