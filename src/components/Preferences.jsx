export default function Preferences({ prefsOpen, uptime, setUptime }) {

    return (
        <div className={prefsOpen ? ("prefs open") : ("prefs")}>
            <div className="pref-group">
                <p>strat:</p>
                <button className={uptime ? "settings-button" : "settings-button active"} onClick={() => setUptime(false)}>regular</button>
                <button className={uptime ? "settings-button active" : "settings-button"} onClick={() => setUptime(true)}>uptime</button>
                <p>{uptime ? ("uptime") : ("regular")}</p>
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