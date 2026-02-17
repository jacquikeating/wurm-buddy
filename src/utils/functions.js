export function getStackDefInstructions(uptime, myJob, firstMech) {
    // Returns an array with instructions to resolve the stacks/defs mechanic. 
    // [0] is a summary for display on SummaryScreen.
    // [1] to [4] will become the verbal commands called out in the timeline.
    
    let stackSpot = ""
    let defSpot = ""
    let nonDefSpot = ""

    if (myJob.group == 1) {
        if (uptime) {
            stackSpot = "E"
            defSpot = "NE"
        } else {
            stackSpot = "N"
            defSpot = "E"
        }
    } else if (myJob.group == 2) {
        if (uptime) {
            stackSpot = "W"
            defSpot = "NW"
        } else {
            stackSpot = "S"
            defSpot = "W"
        } 
    }

    if (uptime) {
        nonDefSpot = "S"
    } else if (!uptime) {
        nonDefSpot = "wall"
    }

    if (myJob.mechanic == "stack") {
        if (firstMech == "stacks") {
            return [`${stackSpot}`, `${stackSpot}`, `${nonDefSpot}`, `${stackSpot}`, `${nonDefSpot}`]
        } else if (firstMech == "defs") {
            return [`${stackSpot}`, `${nonDefSpot}`, `${stackSpot}`, `${nonDefSpot}`, `${stackSpot}`]
    }
    } else if (myJob.mechanic === "def 1" || "def 2") {
        if (firstMech === "stacks") {
            if (myJob.defNum == 1) {
                return [`def 1 ${defSpot}, party ${stackSpot}`, `${stackSpot}`, `def ${defSpot}`, `${stackSpot}`, `${nonDefSpot}`]
            } else if (myJob.defNum == 2) {
                return [`def 2 ${defSpot}, party ${stackSpot}`, `${stackSpot}`, `${nonDefSpot}`, `${stackSpot}`, `def ${defSpot}`]
            }
        } else if (firstMech === "defs") {
            if (myJob.defNum == 1) {
                return [`def 1 ${defSpot}, party ${stackSpot}`, `def ${defSpot}`, `${stackSpot}`, `${nonDefSpot}`, `${stackSpot}`,]
            } else if (myJob.defNum == 2) {
                return [`def 2 ${defSpot}, party ${stackSpot}`, `${nonDefSpot}`, `${stackSpot}`, `def ${defSpot}`, `${stackSpot}`,]
            }
        }
    }

    // // ORIGINAL (VERBOSE) VERSION
    // if (myJob.mechanic == "stack") {
    //     if (firstMech == "stacks") {
    //         return [`stack ${stackSpot}`, `stack ${stackSpot}`, "go S", `stack ${stackSpot}`, "go S"]
    //     } else if (firstMech == "defs") {
    //         return [`stack ${stackSpot}`, "go S", `stack ${stackSpot}`, "go S", `stack ${stackSpot}`]
    // }
    // } else if (myJob.mechanic === "def 1" || "def 2") {
    //     if (firstMech === "stacks") {
    //         if (myJob.defNum == 1) {
    //             return [`def 1 ${defSpot}, party ${stackSpot}`, `stack ${stackSpot}`, `take def ${defSpot}`, `stack ${stackSpot}`, "go S"]
    //         } else if (myJob.defNum == 2) {
    //             return [`def 2 ${defSpot}, party ${stackSpot}`, `stack ${stackSpot}`, "go S", `stack ${stackSpot}`, `take def ${defSpot}`]
    //         }
    //     } else if (firstMech === "defs") {
    //         if (myJob.defNum == 1) {
    //             return [`def 1 ${defSpot}, party ${stackSpot}`, `take def ${defSpot}`, `stack ${stackSpot}`, "go S", `stack ${stackSpot}`,]
    //         } else if (myJob.defNum == 2) {
    //             return [`def 2 ${defSpot}, party ${stackSpot}`, "go S", `stack ${stackSpot}`, `take def ${defSpot}`, `stack ${stackSpot}`,]
    //         }
    //     }
    // }  
}