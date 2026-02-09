export default function Screen4({ setFirstMech }) {
    return (
        <div className="screen-4">
            <div className="option" onClick={() => setFirstMech("stacks")}>
                <span className="option-name">Stacks First</span>
            </div>
            <div className="option" onClick={() => setFirstMech("defs")}>
                <span className="option-name">Defs First</span>
            </div>
        </div>
    )
}