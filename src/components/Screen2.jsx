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
        {
            location: "N",
            quadrant: 1,
            mechanic: "stack",
            group: 1
        },
        {
            location: "NE",
            quadrant: 2,
            mechanic: "stack",
            group: 1
        },
    ]

    return (
        <div className="screen-2">
            {jobOptions.map((job, index) => {
                return (
                    <button className="clone-button" style={{"--i": index}} key={index}>
                        {job.location}
                    </button>
                )
            })}
        </div>
    )
}