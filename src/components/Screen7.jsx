export default function Screen7({ hourglassLocation, portalClone, setSafePlatform }) {

    let platformClone = ""
    if (portalClone == "hourglass") {
        platformClone = "bowtie"
    } else if (portalClone == "bowtie") {
        platformClone = "hourglass"
    }

    return (
        <div className="screen-7 side-split">
            <div className="option" onClick={() => setSafePlatform("west")}>
                <span className="option-name">West</span>
            </div>
            <div className="option" onClick={() => setSafePlatform("east")}>
                <span className="option-name">East</span>
            </div>            
        </div>
    )
}