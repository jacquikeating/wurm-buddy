export default function MenuBar({ uptime, setUptime }) {

    function reset() {
        console.log("reset")
    }

    return (
        <div className="menu-bar">
            <button className="toggle-button" onClick={() => setUptime(!uptime)}>{ uptime ? "uptime" : "regular"}</button>
            <button className="toggle-button" onClick={reset}>reset</button>
        </div>
    )
}