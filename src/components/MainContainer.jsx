import MenuBar from "./MenuBar"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import { useState, useEffect } from "react"

export default function MainContainer() {
    const [uptime, setUptime] = useState(true)
    const [cardsOrInters, setCardsOrInters] = useState(null)
    const [myJob, setMyJob] = useState(null)

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