export default function Preferences({ prefsOpen }) {

    return (
        <div className={prefsOpen ? ("prefs open") : ("prefs")}>
            <h2>Preferences</h2>
        </div>
    )
}