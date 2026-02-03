import MenuBar from "./MenuBar"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import { useState } from "react"

export default function MainContainer() {
    const [cardsOrInters, setCardsOrInters] = useState(null)

    return (
        <div className="container">
            <MenuBar />
            <div className="stored-variables">
                {cardsOrInters && <p>{cardsOrInters}</p>}
            </div>
            <main>
                {!cardsOrInters ? (
                    <Screen1 setCardsOrInters={setCardsOrInters} />
                ) : (
                    <Screen2 />
                )}
                
            </main>
        </div>
    )
}