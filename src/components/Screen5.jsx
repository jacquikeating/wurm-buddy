export default function Screen5({ setTower, setStep }) {

    function handleInput(selectedOption) {
        setTower(selectedOption)
        setStep(8)
    }

    return (
        <div className="screen-5">
            <div className="option-row">
                <div className="option fire" onClick={() => handleInput(["left", "fire"])}>
                    <span className="option-name">Fire</span>
                </div>
                <div className="option fire" onClick={() => handleInput(["right", "fire"])}>
                    <span className="option-name">Fire</span>
                </div>
            </div>

            <div className="option-row">
                <div className="option earth" onClick={() => handleInput(["left", "earth"])}>
                    <span className="option-name">Earth</span>
                </div>
                <div className="option earth" onClick={() => handleInput(["right", "earth"])}>
                    <span className="option-name">Earth</span>
                </div>
            </div>

            <div className="option-row">
                <div className="option wind" onClick={() => handleInput(["left", "wind"])}>
                    <span className="option-name">Wind</span>
                </div>
                <div className="option wind" onClick={() => handleInput(["right", "wind"])}>
                    <span className="option-name">Wind</span>
                </div>
            </div>

            <div className="option-row">
                <div className="option dark" onClick={() => handleInput(["left", "dark"])}>
                    <span className="option-name">Dark</span>
                </div>
                <div className="option dark" onClick={() => handleInput(["right", "dark"])}>
                    <span className="option-name">Dark</span>
                </div>
            </div>
        </div>
    )
}