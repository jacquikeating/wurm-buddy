export default function Preferences({ prefs }) {
    const [prefsOpen, setPrefsOpen, uptime, setUptime, size, setSize, role, setRole] = prefs

    function handleChange(pref, value) {
        if (pref == "uptime") {
            setUptime(value)
            localStorage.setItem("prefs", JSON.stringify({uptime: value, size: size, role: role})) 
        } else if (pref =="size") {
            setSize(value)
            localStorage.setItem("prefs", JSON.stringify({uptime: uptime, size: value, role: role})) 
        } else if (pref == "role") {
            setRole(value)
            localStorage.setItem("prefs", JSON.stringify({uptime: uptime, size: size, role: value})) 
        } 
    }

    return (
        <div className={prefsOpen ? ("prefs open") : ("prefs")}>
            <div className="pref-group">
                <p className="pref-name">strat:</p>
                <button className={uptime ? "settings-button active" : "settings-button"} onClick={() => handleChange("uptime", true)}>uptime</button>
                <button className={uptime ? "settings-button" : "settings-button active"} onClick={() => handleChange("uptime", false)}>regular</button>
            </div>

            <div className="pref-group">
                <p className="pref-name">size:</p>
                <button className={size == "mini" ? "settings-button active" : "settings-button"} onClick={() => handleChange("size", "mini")}>mini</button>
                <button className={size == "large" ? "settings-button active" : "settings-button"} onClick={() => handleChange("size", "large")}>large</button>
            </div>

            <div className="pref-group">
                <p className="pref-name">role:</p>
                <button className={role == "SGE" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "SGE")}>SGE</button>
                <button className={role == "GenericMelee" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "GenericMelee")}>not SGE (melee)</button>
                <button className={role == "Generic" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "Generic")}>not SGE (ranged)</button>
            </div>
            
            <button className="close-prefs" onClick={() => setPrefsOpen(false)}>x</button>
        </div>
    )
}