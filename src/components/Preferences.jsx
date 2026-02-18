export default function Preferences({ prefs }) {
    const [prefsOpen, setPrefsOpen, uptime, setUptime] = prefs

    return (
        <div className={prefsOpen ? ("prefs open") : ("prefs")}>
            <div className="pref-group">
                <p>strat:</p>
                <button className={uptime ? "settings-button" : "settings-button active"} onClick={() => setUptime(false)}>regular</button>
                <button className={uptime ? "settings-button active" : "settings-button"} onClick={() => setUptime(true)}>uptime</button>
            </div>

            <div className="pref-group">
                <p>size:</p>
            </div>

            <div className="pref-group">
                <p>role:</p>
            </div>
            
        </div>
    )
}