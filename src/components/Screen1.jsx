export default function Screen1({ setCardsOrInters, setStep }) {

    function handleInput(selectedOption) {
        setCardsOrInters(selectedOption)
        setStep(2)
    }

    return (
        <div className="screen-1">
            <div className="option" onClick={() => handleInput("cards")}>
                <span className="option-name">Cards</span>
            </div>
            <div className="option" onClick={() => handleInput("intercards")}>
                <span className="option-name">Intercards</span>
            </div>
        </div>
    )
}