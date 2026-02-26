export default function MenuBar({ setMechanicVariables, prefs }) {
    const [setStep, setCardsOrInters, setMyJob, setHourglassLocation, setFirstMech, setTower, setPortalClone, setSafePlatform] = setMechanicVariables
    const [prefsOpen, setPrefsOpen] = prefs

    function reset() {
        setStep(1)
        setCardsOrInters(null)
        setMyJob(null)
        setHourglassLocation(null)
        setFirstMech(null)
        setTower(["", "", "", "", ""])
        setPortalClone(null)
        setSafePlatform(["", ""])
    }

    return (
        <div className="menu-bar">
            <button className="menu-button" onClick={() => setPrefsOpen(!prefsOpen)}>settings</button>
            <button className="menu-button" onClick={reset}>reset</button>
        </div>
    )
}