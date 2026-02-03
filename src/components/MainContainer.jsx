import MenuBar from "./MenuBar"
import Screen1 from "./Screen1"

export default function MainContainer() {
    return (
        <div className="container">
            <MenuBar />
            <main>
                <Screen1 />
            </main>
        </div>
    )
}