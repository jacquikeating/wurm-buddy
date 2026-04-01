import { useState } from "react"

export default function Preferences({ prefs }) {
    const [prefsOpen, setPrefsOpen, banana, setBanana, uptime, setUptime, size, setSize, mechs, setMechs, role, setRole] = prefs
    const [openRolesMenu, setOpenRolesMenu] = useState(false)

    function handleChange(pref, value) {
        if (pref == "uptime") {
            setUptime(value)
            localStorage.setItem("prefs", JSON.stringify({banana: banana, uptime: value, size: size, mechs: mechs, role: role})) 
        } else if (pref =="size") {
            setSize(value)
            localStorage.setItem("prefs", JSON.stringify({banana: banana, uptime: uptime, size: value, mechs: mechs, role: role})) 
        } else if (pref == "role") {
            setRole(value)
            localStorage.setItem("prefs", JSON.stringify({banana: banana, uptime: uptime, size: size, mechs: mechs, role: value}))
            setOpenRolesMenu(false) 
        } else if (pref == "rep2") {
            setBanana(value)
            localStorage.setItem("prefs", JSON.stringify({banana: value, uptime: uptime, size: size, mechs: mechs, role: role})) 
        } else if (pref == "mechs") {
            setMechs(value)
            localStorage.setItem("prefs", JSON.stringify({banana: banana, uptime: uptime, size: size, mechs: value, role: role})) 
        }
    }

    let roleName = role
    if (role == "Generic") {
        roleName = "ranged (generic)"
    } else if (role == "GenericMelee") {
        roleName = "melee (generic)"
    }

    return (
        <div className={prefsOpen ? ("prefs open") : ("prefs")}>
            {openRolesMenu ? (
                <div className="roles-menu">
                    <div className="role-btn-group">
                        <button className={role == "GenericMelee" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "GenericMelee")}>melee</button>
                        <div className="role-btn-subgroup">
                            <button className={role == "M1" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "M1")}>M1</button>
                            <button className={role == "M2" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "M2")}>M2</button>
                        </div>
                        <div className="role-btn-subgroup">
                            <button className={role == "MT" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "MT")}>MT</button>
                            <button className={role == "OT" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "OT")}>OT</button>
                        </div>
                    </div>
                    <div className="role-btn-group">
                        <button className={role == "Generic" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "Generic")}>ranged</button>
                        <div className="role-btn-subgroup">
                            <button className={role == "R1" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "R1")}>R1</button>
                            <button className={role == "R2" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "R2")}>R2</button>
                        </div>
                        <div className="role-btn-subgroup">
                            <button className={role == "H1" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "H1")}>H1</button>
                            <button className={role == "SGE" ? "settings-button active" : "settings-button"} onClick={() => handleChange("role", "SGE")}>H2</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="pref-group">
                        <p className="pref-name">rep 2:</p>
                        <button className={banana ? "settings-button active" : "settings-button"} onClick={() => handleChange("rep2", true)}>banana</button>
                        <button className={banana ? "settings-button" : "settings-button active"} onClick={() => handleChange("rep2", false)}>clone zone</button>
                    </div>
                    <div className="pref-group">
                        <p className="pref-name">idyllic:</p>
                        <button className={uptime ? "settings-button active" : "settings-button"} onClick={() => handleChange("uptime", true)}>uptime</button>
                        <button className={uptime ? "settings-button" : "settings-button active"} onClick={() => handleChange("uptime", false)}>regular</button>
                    </div>
                    <div className="pref-group">
                        <p className="pref-name">size:</p>
                        <button className={size == "mini" ? "settings-button active" : "settings-button"} onClick={() => handleChange("size", "mini")}>mini</button>
                        <button className={size == "large" ? "settings-button active" : "settings-button"} onClick={() => handleChange("size", "large")}>large</button>
                    </div>
                    <div className="pref-group">
                        <p className="pref-name">mechs:</p>
                        <button className={mechs == "both" ? "settings-button active" : "settings-button"} onClick={() => handleChange("mechs", "both")}>both</button>
                        <button className={mechs == "rep2" ? "settings-button active" : "settings-button"} onClick={() => handleChange("mechs", "rep2")}>rep 2<br />only</button>
                        <button className={mechs == "idyllic" ? "settings-button active" : "settings-button"} onClick={() => handleChange("mechs", "idyllic")}>idyllic<br />only</button>
                    </div>
                    <div className="pref-group">
                        <p className="pref-name">role:</p>
                            <button className="settings-button active">{roleName}</button>
                            <button className="settings-button text-only" onClick={() => setOpenRolesMenu(true)}>change...</button>
                    </div>
                </div>
            )}            
            <button className="close-prefs" onClick={() => setPrefsOpen(false)}>x</button>
        </div>
    )
}