export function getStackDefInstructions(uptime, myJob, firstMech) {
    // Returns an array with instructions to resolve the stacks/defs mechanic. 
    // [0] is a summary for display on SummaryScreen.
    // [1] to [4] will become the verbal commands called out in the timeline.
    
    let stackLocation = ""
    let defLocation = ""

    if (myJob.group == 1) {
        if (uptime) {
            stackLocation = "E"
            defLocation = "NE"
        } else {
            stackLocation = "N"
            defLocation = "E"
        }
    } else if (myJob.group == 2) {
        if (uptime) {
            stackLocation = "W"
            defLocation = "NW"
        } else {
            stackLocation = "S"
            defLocation = "W"
        } 
    }

    if (myJob.mechanic === "stack") {
        if (firstMech === "stack") {
            return [`stack ${stackLocation}`, `stack ${stackLocation}`, "go S", `stack ${stackLocation}`, "go S" ]
        } else if (firstMech === "def") {
            return [`stack ${stackLocation}`, "go S", `stack ${stackLocation}`, "go S", `stack ${stackLocation}`]
        }
    } else if (myJob.mechanic === "def 1" || "def 2") {
        if (firstMech === "stack") {
            if (myJob.defNum == 1) {
                return [`def 1 ${defLocation}, party ${stackLocation}`, `stack ${stackLocation}`, `take def ${defLocation}`, `stack ${stackLocation}`, "go S"]
            } else if (myJob.defNum == 2) {
                return [`def 2 ${defLocation}, party ${stackLocation}`, `stack ${stackLocation}`, "go S", `stack ${stackLocation}`, `take def ${defLocation}`]
            }
        } else if (firstMech === "def") {
            if (myJob.defNum == 1) {
                return [`def 1 ${defLocation}, party ${stackLocation}`, `take def ${defLocation}`, `stack ${stackLocation}`, "go S", `stack ${stackLocation}`,]
            } else if (myJob.defNum == 2) {
                return [`def 2 ${defLocation}, party ${stackLocation}`, "go S", `stack ${stackLocation}`, `take def ${defLocation}`, `stack ${stackLocation}`,]
            }
        }
    }
        
}