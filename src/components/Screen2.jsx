export default function Screen2() {

    const jobOptions = [
        // We have to start with east, not north, because of how the CSS renders the buttons in a circle
        {
            location: "E",
            quadrant: 3,
            mechanic: "stack",
            group: 2
        },
        {
            location: "SE",
            quadrant: 4,
            mechanic: "stack",
            group: 2
        },
        {
            location: "S",
            quadrant: 1,
            mechanic: "def 1",
            group: 1
        },
        {
            location: "SW",
            quadrant: 2,
            mechanic: "def 2",
            group: 1
        },
        {
            location: "W",
            quadrant: 3,
            mechanic: "def 1",
            group: 2
        },
        {
            location: "NW",
            quadrant: 4,
            mechanic: "def 2",
            group: 2
        },
    ]

    return (
        <div className="screen-2">
            <button class="clone-button" style={{"--i": 0}}>
                <span>E</span>
            </button>
            <button class="clone-button" style={{"--i": 1}}>
                <span>SE</span>
            </button>
            <button class="clone-button" style={{"--i": 2}}>
                <span>S</span>
            </button>
            <button class="clone-button" style={{"--i": 3}}>
                <span>SW</span>
            </button>
            <button class="clone-button" style={{"--i": 4}}>
                <span>W</span>
            </button>
            <button class="clone-button" style={{"--i": 5}}>
                <span>NW</span>
            </button>
            <button class="clone-button" style={{"--i": 6}}>
                <span>N</span>
            </button>
            <button class="clone-button" style={{"--i": 7}}>
                <span>NE</span>
            </button>
        </div>
    )
}