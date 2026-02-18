export default function MenuBar({ uptime, setAll }) {

    const [setUptime] = setAll

    function reset() {
        console.log("reset")
    }

    return (
        <div className="menu-bar">
            <button className="menu-button" onClick={() => setUptime(!uptime)}>{ uptime ? "uptime" : "regular"}</button>
            <button className="menu-button" onClick={reset}>reset</button>
        </div>
    )
}