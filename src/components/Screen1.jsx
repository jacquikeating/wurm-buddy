export default function Screen1({ setCardsOrInters }) {
    return (
        <div className="screen-1">
            <div className="option" onClick={() => setCardsOrInters("cards")}>
                <span className="option-name">Cards</span>
            </div>
            <div className="option" onClick={() => setCardsOrInters("intercards")}>
                <span className="option-name">Intercards</span>
            </div>
        </div>
    )
}