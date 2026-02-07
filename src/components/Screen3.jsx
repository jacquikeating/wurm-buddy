export default function Screen3({ setHourglassLocation  }) {
    return (
        <div className="screen-3">
            <div className="option" onClick={() => setHourglassLocation("north")}>
                <span className="option-name">North</span>
            </div>
            <div className="option" onClick={() => setHourglassLocation("south")}>
                <span className="option-name">South</span>
            </div>
        </div>
    )
}