export default function MenuBar({ setMechanicVariables, prefs }) {
    const [setStep, setRep2Clone, setBloodMana, setCardsOrInters, setMyJob, setHourglassLocation, setFirstMech, setTower, setPortalClone, setSafePlatform] = setMechanicVariables
    const [prefsOpen, setPrefsOpen, banana, setBanana, uptime, setUptime, size, setSize, mechs, setMechs, role, setRole] = prefs

    function reset() {
        if (mechs == "idyllic") {
            setStep(9)
        } else {
            setStep(1)
        }
        setRep2Clone(null)
        setBloodMana(["", "", "", ""])
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