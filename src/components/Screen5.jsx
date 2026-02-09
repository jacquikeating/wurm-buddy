export default function Screen5({ setTower }) {
    return (
        <div className="screen-5">
            <div className="option-row">
                <div className="option" onClick={() => setTower(["left", "fire"])}>
                    <span className="option-name">Fire</span>
                </div>
                <div className="option" onClick={() => setTower(["right", "fire"])}>
                    <span className="option-name">Fire</span>
                </div>
            </div>

            <div className="option-row">
                <div className="option" onClick={() => setTower(["left", "earth"])}>
                    <span className="option-name">Earth</span>
                </div>
                <div className="option" onClick={() => setTower(["right", "earth"])}>
                    <span className="option-name">Earth</span>
                </div>
            </div>

            <div className="option-row">
                <div className="option" onClick={() => setTower(["left", "wind"])}>
                    <span className="option-name">Wind</span>
                </div>
                <div className="option" onClick={() => setTower(["right", "wind"])}>
                    <span className="option-name">Wind</span>
                </div>
            </div>

            <div className="option-row">
                <div className="option" onClick={() => setTower(["left", "dark"])}>
                    <span className="option-name">Dark</span>
                </div>
                <div className="option" onClick={() => setTower(["right", "dark"])}>
                    <span className="option-name">Dark</span>
                </div>
            </div>
        </div>
    )
}