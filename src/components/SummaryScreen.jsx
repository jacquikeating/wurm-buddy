export default function SummaryScreen({ summary }) {

    const {quadrant, hourglass, tetherType, firstMech, instructions, tower, cardsOrInters, safePlatform, portalClone} = summary

    return (
        <>
            {/* <div className="stored-variables">
                    {cardsOrInters && <p>{cardsOrInters}</p>}
                    {myJob && (<p>take {myJob.mechanic} tether in quadrant {myJob.quadrant}</p>)}
                    {myJob && (<p>{instructions[0]}</p>)}
                    {hourglassLocation && (<p>{hourglassLocation}</p>)}
                    {firstMech && (<p>{firstMech} first</p>)}
                    {tower && (<p>back {tower[0]} ({tower[1]})</p>)}
            </div> */}

            <div className="mech-group">
                <h2>Start</h2>
                <p>{quadrant && <span>{quadrant || "?"} quad, {tetherType} tether</span>}</p>
                <p>{hourglass && <span>{hourglass} safe</span>}</p>
            </div>

            <div className="mech-group">
                <h2>Mid</h2>
                <p>{firstMech && <span>{firstMech} first</span>}</p>
                <p>{summary.instructions && <span>{summary.instructions[0]}</span>}</p>
                <p>{tower && <span>back {tower[0]} tower ({tower[1]})</span>}</p>
            </div>

            <div className="mech-group">
                <h2>End</h2>
                <p>{cardsOrInters && <span>stack on {cardsOrInters}</span>}</p>
                <p>{safePlatform && <span>{safePlatform}</span>}</p>
                <p>{cardsOrInters && <span>stack on {cardsOrInters == "cards" ? "intercards" : "cards" }</span>}</p>
                <p>{portalClone && <span>{portalClone}</span>}</p>
            </div>
        </>
        
    )
}