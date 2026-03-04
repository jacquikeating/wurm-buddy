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
                <button className={role == "GenericMelee" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "GenericMelee")}>generic - melee</button>
                <button className={role == "Generic" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "Generic")}>generic - ranged</button>
                <button className={role == "M1" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "M1")}>M1</button>
                <button className={role == "M2" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "M2")}>M2</button>
                <button className={role == "R1" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "R1")}>R1</button>
                <button className={role == "R2" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "R2")}>R2</button>
                <button className={role == "MT" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "MT")}>MT</button>
                <button className={role == "OT" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "OT")}>OT</button>
                
                <button className={role == "WHM" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "WHM")}>WHM</button>
                <button className={role == "AST" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "AST")}>AST</button>
                <button className={role == "SCH" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "SCH")}>SCH</button>
                <button className={role == "SGE" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "SGE")}>SGE</button>

            </div>
            
            <button className="close-prefs" onClick={() => setPrefsOpen(false)}>x</button>
        </div>
    )
}