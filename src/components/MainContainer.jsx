import MenuBar from "./MenuBar"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
import Screen5 from "./Screen5"
import { useState, useEffect } from "react"

export default function MainContainer() {
    const [uptime, setUptime] = useState(true)
    const [cardsOrInters, setCardsOrInters] = useState(null)
    const [myJob, setMyJob] = useState(null)
    const [instructions, setInstructions] = useState(null)
    const [hourglassLocation, setHourglassLocation] = useState(null)
    const [firstMech, setFirstMech] = useState(null)
    const [tower, setTower] = useState(null)
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


    return (
        <div className="container">
            <MenuBar uptime={uptime} setUptime={setUptime} />
            <div className="stored-variables">
                {cardsOrInters && <p>{cardsOrInters}</p>}
                {myJob && <p>{myJob.mechanic}</p>}
            </div>
            <main>
                {!cardsOrInters ? (
                    <Screen1 setCardsOrInters={setCardsOrInters} />
                ) : (
                    <Screen2 setMyJob={setMyJob} />
                )}
                
            </main>
        </div>
    )
}