export default function MenuBar({ uptime, setUptime }) {
    return (
        <div className="menu-bar">
            <button className="toggle-button" onClick={() => setUptime(!uptime)}>{ uptime ? "uptime" : "regular"}</button>
        </div>
    )
}