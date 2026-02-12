export default function Screen7({ portalClone, setSafePlatform }) {

    let safeSide = portalClone == "sides safe" ? ("north safe") : ("boss safe")

    return (
        <div className="screen-7 side-split">
            <div className="option" onClick={() => setSafePlatform(`west platform, ${safeSide}`)}>
                <span className="option-name">West</span>
            </div>
            <div className="option" onClick={() => setSafePlatform(`east platform, ${safeSide}`)}>
                <span className="option-name">East</span>
            </div>            
        </div>
    )
}