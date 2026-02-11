import MenuBar from "./MenuBar"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
import Screen5 from "./Screen5"
import Screen6 from "./Screen6"
import Screen7 from "./Screen7"
import SummaryScreen from "./SummaryScreen"
import { useState, useEffect } from "react"

export default function MainContainer() {
    const [uptime, setUptime] = useState(true)
    const [cardsOrInters, setCardsOrInters] = useState(null)
    const [myJob, setMyJob] = useState(null)
    const [instructions, setInstructions] = useState(null)
    const [hourglassLocation, setHourglassLocation] = useState(null)
    const [firstMech, setFirstMech] = useState(null)
    const [tower, setTower] = useState(null)
    const [portalClone, setPortalClone] = useState(null)
    const [safePlatform, setSafePlatform] = useState(null)

    useEffect(() => {
        if (myJob) {
            let stackLocation = "?"
            let defLocation = ""

            if (myJob.group == 1) {
                if (uptime) {
                    stackLocation = "E"
                    defLocation = "NE"
                } else {
                    stackLocation = "N"
                    defLocation = "E"
                }
            } else if (myJob.group == 2) {
            if (uptime) {
                    stackLocation = "W"
                    defLocation = "NW"
                } else {
                    stackLocation = "S"
                    defLocation = "W"
                } 
            }

            if (myJob.mechanic === "stack") {
                setInstructions("stack " + stackLocation)
            } else if (myJob.mechanic === "def 1" || "def 2") {
                setInstructions(`def ${myJob.defNum} ${defLocation}, party ${stackLocation}`)
            }
        }
    }, [myJob, uptime])

    function renderContent() {
        if (!cardsOrInters) {
            return <Screen1 setCardsOrInters={setCardsOrInters} />
        } else if (!myJob) {
            return <Screen2 setMyJob={setMyJob} />
        } else if (!hourglassLocation) {
            return <Screen3 setHourglassLocation={setHourglassLocation} />
        } else if (!firstMech) {
            return <Screen4 setFirstMech={setFirstMech} />
        } else if (!tower) {
            return <Screen5 setTower={setTower} />
        } else if (!portalClone) {
            return <Screen6 setPortalClone={setPortalClone} />
        } else if (!safePlatform) {
            return <Screen7 setSafePlatform={setSafePlatform} />
         }
    }

    return (
        <div className="container">
            <MenuBar uptime={uptime} setUptime={setUptime} />
            <div className="stored-variables">
                {cardsOrInters && <p>{cardsOrInters}</p>}
                {myJob && (<p>take {myJob.mechanic} tether in quadrant {myJob.quadrant}</p>)}
                {myJob && (<p>{instructions}</p>)}
                {hourglassLocation && (<p>{hourglassLocation}</p>)}
                {firstMech && (<p>{firstMech} first</p>)}
                {tower && (<p>back {tower[0]} ({tower[1]})</p>)}
            </div>
            <main>
                {renderContent()}
                
            </main>
        </div>
    )
}