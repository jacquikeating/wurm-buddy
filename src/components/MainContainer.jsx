import MenuBar from "./MenuBar"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
import Screen5 from "./Screen5"
import Screen6 from "./Screen6"
import Screen7 from "./Screen7"
import Output from "./Output"
import Preferences from "./Preferences"
import Rep2CloneSelect from "./Rep2CloneSelect"
import BloodMana from "./BloodMana"
import Onboarding from "./Onboarding"
import { getFirstMessage, getStackDefInstructions } from "../utils/functions"
import { StepContext } from "../utils/context.js"
import { useState, useEffect } from "react"

export default function MainContainer() {
    // // PREFILLED VARIABLES FOR TIMELINE DEVELOPMENT PURPOSES
    // const [step, setStep] = useState(10)
    // const [cardsOrInters, setCardsOrInters] = useState("cards")
    // const [myJob, setMyJob] = useState({
    //         location: "SE",
    //         quadrant: 4,
    //         quadRel: "top left",
    //         mechanic: "stack",
    //         group: 2
    //     })
    // const [instructions, setInstructions] = useState(["", "", "", "", ""])
    // const [hourglassLocation, setHourglassLocation] = useState("south")
    // const [firstMech, setFirstMech] = useState("defs")
    // const [tower, setTower] = useState(["left", "fire", "pyretic", "S", "platform edge"])
    // const [portalClone, setPortalClone] = useState("sides safe")
    // const [safePlatform, setSafePlatform] = useState(["west platform", "north safe"])

    // // DEFAULT EMPTY VARIABLES - USE WHILE NOT ACTIVELY DEVELOPING TIMELINE
    const [step, setStep] = useState(1)
    const [rep2Clone, setRep2Clone] = useState(null)
    const [bloodMana, setBloodMana] = useState(["", ""])
    const [cardsOrInters, setCardsOrInters] = useState(null)
    const [myJob, setMyJob] = useState(null)
    const [instructions, setInstructions] = useState(["", "", "", "", ""])
    const [hourglassLocation, setHourglassLocation] = useState(null)
    const [firstMech, setFirstMech] = useState(null)
    const [tower, setTower] = useState(["", "", "", "", ""])
    const [portalClone, setPortalClone] = useState(null)
    const [safePlatform, setSafePlatform] = useState(["", ""])
    const mechanicVariables = [step, rep2Clone, bloodMana, cardsOrInters, myJob, instructions, hourglassLocation, firstMech, tower, portalClone, safePlatform]
    const setMechanicVariables = [setStep, setRep2Clone, setBloodMana, setCardsOrInters, setMyJob, setHourglassLocation, setFirstMech, setTower, setPortalClone, setSafePlatform]

    // LOCAL STORAGE
    const [onboarded, setOnboarded] = useState(JSON.parse(localStorage.getItem("onboarded"))) 
    const localStoragePrefs = JSON.parse(localStorage.getItem("prefs"))

    // PREFERENCES
    let defaultPrefs = {banana: true, uptime: true, size: "mini", mechs: "both", role: "GenericMelee"}
    if (localStoragePrefs) {
        defaultPrefs = localStoragePrefs
    }
    const [prefsOpen, setPrefsOpen] = useState(false)
    const [banana, setBanana] = useState(defaultPrefs.banana)
    const [uptime, setUptime] = useState(defaultPrefs.uptime)
    const [size, setSize] = useState(defaultPrefs.size)
    const [mechs, setMechs] = useState(defaultPrefs.mechs)
    const [role, setRole] = useState(defaultPrefs.role)
    const prefs = [prefsOpen, setPrefsOpen, banana, setBanana, uptime, setUptime, size, setSize, mechs, setMechs, role, setRole]

    // OUTPUT MESSAGES

    // Each array item represents a mechanic in the mit plan:
    // rep 2 start, reenact, blood mana, near/far + rw, idyllic 1, platform break, stacks/defs, clone stacks, idyllic 2, hell 1, hell 2
    let mitPlan = ["", "", "", "", "", "", "", "", "", "", ""] // Empty strings for generic roles
    let platform = "platform" // Fallback for generic roles

    switch (role) {
        case "MT": 
            mitPlan =  ["rep", "party mit", "", "rep", "party mit", "rep", "party mit", "rep", "party mit", "rep", ""]
            platform = "west"
            break;
        case "OT":
            mitPlan = ["party mit", "rep", "", "party mit", "rep", "party mit", "", "party mit", "rep", "", "rep + party mit"]
            platform = "east"
            break;
        case "M1":
            mitPlan = ["feint", "", "", "feint", "", "feint", "personals", "", "feint", "", ""]
            platform = "west"
            break;
        case "M2":
            mitPlan = ["", "feint", "", "", "feint", "", "personals", "feint", "", "", "feint"]
            platform = "east"
            break;
        case "R1":
            mitPlan = ["party mit", "", "", "party mit", "", "party mit", "personals", "party mit", "", "", "party mit"]
            platform = "west"
            break;
        case "R2":
            mitPlan = ["addle", "", "", "addle", "", "addle", "personals", "", "addle", "", ""]
            platform = "east"
            break;
        case "H1":
            mitPlan = ["3 min cd", "10% mit + 2 min cd", "", "10% mit", "", "10% mit", "use all cds", "", "10% mit", "2 min cd", "10% mit"]
            platform = "west"
            break;        
    }

    const coneMsg = banana ? "inside boss ring" : "face N"

    const rep2Output = [
        [`${rep2Clone?.mechanic}`, `${rep2Clone?.tether}`],
        [`${rep2Clone?.initialPos[0]}`, `${rep2Clone?.initialPos[1]}`, `${mitPlan[0]}`],
        [`stack ${rep2Clone?.group}`, `${rep2Clone?.mechanic == "cone" ? coneMsg : ""}`, `2 min burst`],
        [`cones & kick`],
        [`${rep2Clone?.reenactPos1[0]}`, `${rep2Clone?.reenactPos1[1]}`, `${mitPlan[1]}`],
        [`${rep2Clone?.reenactPos2[0]}`, `${rep2Clone?.reenactPos2[1]}`]
        // Mechs between rep 2 and idyllic
        [`check debuff`, `${mitPlan[2]}`], // SGE: kera
        [`${bloodMana[0]}`],
        [`${bloodMana[1]}`],
        [`near/far`, `${mitPlan[3]}`], // SGE: kera
        [`tankbuster`], // SGE: zoe eprog holos
        [`${mitPlan[4]}`] // SGE: kera
    ]   

    const outputGeneric = [
        [`${myJob?.quadrant} (${myJob?.quadRel})`, `${getFirstMessage(uptime, myJob)}`], // What quadrant to go to; what job you'll have later
        [`${myJob?.quadrant} (${myJob?.quadRel})`, `${myJob?.mechanic}`], // Quadrant and tether to take
        [`${hourglassLocation || "?"}`], // Which side is safe for first clone telegraph
        [`${platform}`, `${mitPlan[2]}`], // Which side to go for tower platforms; mit reminder
        [`mid`, `${instructions[1]} after`], // Reminder to go mid after tower assignments; sneak preview of your first S/D spot
        [`${instructions[1]}`, `${mitPlan[3]}`], // First S/D (stack/def) spot; mit reminder
        [`${instructions[2]}`, `${mitPlan[3]}`], // Second S/D spot (non-healers can use same mit message for every hit)
        [`${instructions[3]}`, `${mitPlan[3]}`], // Third S/D spot
        [`${instructions[4]}`, `${mitPlan[3]}`], // Fourth S/D spot
        [`${platform}`], // Which side to go for tower platforms
        [`${tower[0]}`, `${tower[2]}`], // Tower side; tower mechanic
        [`${tower[3]}`, `${tower[4]}`], // Where to go for cone spreads 
        [`${tower[3]}`, `${tower[4]}`], // Where to go for cone spreads
        [`${cardsOrInters}`, `${mitPlan[4]}`], // Where to go for first clone stacks; mit reminder
        [`${safePlatform[0]}`, `${safePlatform[1]}`], // Which platform (and where) will be safe for clone telegraph
        [`${cardsOrInters == "cards" ? ("inters") : ("cards")}`], // Where to go for second clone stacks
        [`${portalClone}`, `${mitPlan[5]}`], // Where to go to dodge the final clone telegraph
        [`pot soon!`], // Pot reminder
        [`${mitPlan[6]}`], // Mits for Arcadian Hell 1
        [`${mitPlan[7]}`] // Mits for Arcadian Hell 2
    ]

    const outputSGE = [
        [`${myJob?.quadrant}`, `${myJob?.quadRel}`, `${getFirstMessage(uptime, myJob)}`],
        [`${myJob?.quadrant}`, `${myJob?.quadRel}`, `${myJob?.mechanic}`],
        [`${hourglassLocation || "?"}`, `eprog`],
        [`east`, `late kera`, `ixo eprog`],
        [`phys phil eprog`, `${instructions[1]} after`],
        [`${instructions[1]}`, `pan zoe kera`],
        [`${instructions[2]}`, `${firstMech == "stacks" ? ("eprog holos") : ("top-up")}`],
        [`${instructions[3]}`, `${firstMech == "stacks" ? ("top-up") : ("eprog holos")}`],
        [`${instructions[4]}`, `${firstMech == "stacks" ? ("eprog ixo") : ("top-up")}`],
        [`east`, `${firstMech == "stacks" ? ("top-up") : ("eprog ixo")}`],
        [`${tower[0]}`, `${tower[2]}`],
        [`dooms`, `${tower[3]}`, `${tower[4]}`],
        [`${tower[3]}`, `${tower[4]}`],
        [`${cardsOrInters}`, `eprog kera`],
        [`${safePlatform[0]}, ${safePlatform[1]}`, `ixo`],
        [`${cardsOrInters == "cards" ? ("inters") : ("cards")}`, `eprog`],
        [`${portalClone}`, `eprog kera`],
        [`pot soon!`],
        [`phys eprog holos`, `zoe eprog`],
        [`pan kera`]
    ]

    let outputMessages = outputGeneric
    if (role == "SGE") {
        outputMessages = outputSGE
        platform = "east"
    }

    useEffect(() => {
        firstMech && setInstructions(getStackDefInstructions(uptime, myJob, firstMech))
    }, [firstMech])

    useEffect(() => {
        if (mechs == "idyllic") {
            setStep(9)
        }
    }, [mechs])

    function renderContent() {
        if (!onboarded) {
            return <Onboarding prefs={prefs} setOnboarded={setOnboarded} />
        }

        switch (step) {
            // case 1: return <BloodMana setBloodMana={setBloodMana} />
            case 1: return <Rep2CloneSelect banana={banana} setRep2Clone={setRep2Clone} role={role} />;
            case 2: return <Output messages={rep2Output[0]} timeout={17000} audio={[`/${rep2Clone?.mechanic}.wav`, `/${rep2Clone?.tether}.wav`]} />;
            case 3: return <Output messages={rep2Output[1]} timeout={8000} audio={[`/${rep2Clone?.initialPos[0]}.wav`]} />;
            case 4: return <Output messages={rep2Output[2]} timeout={6000} audio={[`/stack ${rep2Clone?.group}.wav`, `/burst.wav`]} />;
            case 5: return <Output messages={rep2Output[3]} timeout={5000} audio={[`cones & kick.wav`]} />;
            case 6: return <Output messages={rep2Output[4]} timeout={20000} audio={[`/${rep2Clone?.reenactPos1[0]}.wav`]} />;
            case 7: return <Output messages={rep2Output[5]} timeout={15000} audio={[`/${rep2Clone?.reenactPos2[0]}.wav`]} />;
            case 8: return <Output messages={[` `]} timeout={98000} />;
            case 9: return <Screen1 setCardsOrInters={setCardsOrInters} mechs={mechs} />;
            case 10: return <Screen2 setMyJob={setMyJob} timeout={9000} />;
            case 11: return <Output messages={outputMessages[0]} timeout={18000} audio={[`/${myJob.quadrant}.wav`, `/${myJob.quadRel}.wav`, `${getFirstMessage(uptime, myJob)}.wav`]} />;
            case 12: return <Screen3 setHourglassLocation={setHourglassLocation} timeout={8000} />;
            case 13: return <Output messages={outputMessages[1]} timeout={22000} audio={[`/${myJob.quadrant}.wav`, `/${myJob.quadRel}.wav`, `${myJob.mechanic}.wav`]} delay={12000} />;
            case 14: return <Screen4 setFirstMech={setFirstMech} timeout={4000} />;
            case 15: return <Output messages={outputMessages[2]} timeout={6000} audio={[`/${hourglassLocation}.wav`]} />;
            case 16: return <Output messages={outputMessages[3]} timeout={10000} audio={[`/platform.wav`]} />;
            case 17: return <Screen5 setTower={setTower} timeout={10000} role={role} />;
            case 18: return <Output messages={outputMessages[4]} timeout={6000} />; // after tower
            case 19: return <Output messages={outputMessages[5]} timeout={6000} audio={[`/${instructions[1]}.wav`]} />; // running to first mech
            case 20: return <Output messages={outputMessages[6]} timeout={5000} audio={[`/${instructions[2]}.wav`]} />; // btwn 1st and 2nd
            case 21: return <Output messages={outputMessages[7]} timeout={5000} audio={[`/${instructions[3]}.wav`]} />; // btwn 2nd and 3rd
            case 22: return <Output messages={outputMessages[8]} timeout={6000} audio={[`/${instructions[4]}.wav`]} />; // btwn 3rd and 4th
            case 23: return <Output messages={outputMessages[9]} timeout={5000} audio={[`/platform.wav`]} />; // otw to tower spots
            case 24: return <Output messages={outputMessages[10]} timeout={8000} audio={[`/${tower[0]}.wav`, `/${tower[2]}.wav`]} />; // tower type
            case 25: return <Output messages={outputMessages[11]} timeout={5000} audio={[`/${tower[3]}.wav`, `/${tower[4]}.wav`, role == "SGE" && "/dooms.wav"]} delay={5000} />; // esuna & spread spot
            case 26: return <Output messages={outputMessages[12]} timeout={6000} />; // just spread spot
            case 27: return <Output messages={[` `]} timeout={9000} />; // chilling waiting for clones
            case 28: return <Screen6 hourglassLocation={hourglassLocation} setPortalClone={setPortalClone} timeout={5000} />;
            case 29: return <Screen7 portalClone={portalClone} setSafePlatform={setSafePlatform} timeout={5000} />;
            case 30: return <Output messages={outputMessages[13]} timeout={12000} audio={[`/${cardsOrInters}.wav`]} />; // where to go for first stacks
            case 31: return <Output messages={outputMessages[14]} timeout={12000} audio={[`/${safePlatform[0]}.wav`, `/${safePlatform[1]}.wav`]} />; // safe platform
            case 32: return <Output messages={outputMessages[15]} timeout={10000} audio={[`/${cardsOrInters == "cards" ? ("intercards.wav") : ("cards.wav")}`]} />; // second stacks
            case 33: return <Output messages={outputMessages[16]} timeout={12000} audio={[`/${portalClone}.wav`]} />; // portal clone --> castbar damage
            case 34: return <Output messages={[` `]} timeout={7000} />; // just hit boss time
            case 35: return <Output messages={outputMessages[17]} timeout={18000} audio={[`/pot soon.wav`]} />; // pot reminder for 8:00 burst
            case 36: return <Output messages={[` `]} timeout={10000} />; // just hit boss time
            case 37: return <Output messages={outputMessages[18]} timeout={10000} />; // arcadian hell 1
            case 38: return <Output messages={outputMessages[19]} timeout={20000} />; // arcadian hell 2
        }
    }

    return (
        <StepContext.Provider value={{ step, setStep, mechanicVariables, setMechanicVariables }}>
            <div className={size == "large" ? "container" : "container mini"}>
                <MenuBar setMechanicVariables={setMechanicVariables} prefs={prefs} />
                <Preferences prefs={prefs} />
                <main>
                    {renderContent()}
                </main>
            </div>
        </StepContext.Provider>
    )
}