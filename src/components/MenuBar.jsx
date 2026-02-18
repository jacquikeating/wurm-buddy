export default function MenuBar({ setMechanicVariables, prefs }) {
    const [setStep, setCardsOrInters, setMyJob, setHourglassLocation, setFirstMech, setTower, setPortalClone, setSafePlatform] = setMechanicVariables
    const [prefsOpen, setPrefsOpen] = prefs

    function reset() {
        setStep(1)
        setCardsOrInters(null)
        setMyJob(null)
        setHourglassLocation(null)
        setFirstMech(null)
        setTower(["", "", "", ""])
        setPortalClone(null)
        setSafePlatform(null)
    }

    return (
        <div className="menu-bar">
            <button className="menu-button" onClick={() => setPrefsOpen(!prefsOpen)}>prefs</button>
            <button className="menu-button" onClick={reset}>reset</button>
        </div>
    )
}