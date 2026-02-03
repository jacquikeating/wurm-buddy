import MenuBar from "./MenuBar"
import Screen1 from "./Screen1"
import { useState } from "react"

export default function MainContainer() {
    const [cardsOrInters, setCardsOrInters] = useState(null)

    return (
        <div className="container">
            <MenuBar />
            <p>{cardsOrInters}</p>
            <main>
                <Screen1 setCardsOrInters={setCardsOrInters} />
            </main>
        </div>
    )
}