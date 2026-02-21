let genericOutput = [
    [`${myJob?.quadrant}`, `${getFirstMessage(uptime, myJob)}`], // What quadrant to go to; what job you'll have later
    [`${myJob?.quadrant} ${myJob?.mechanic}`], // Quadrant and tether to take
    [`${hourglassLocation || "?"}`], // Which side is safe for first clone telegraph
    [`platform`, `mit`], // Which side to go for tower platforms - replace with "east" or "west"; mit reminder
    [`mid`, `${instructions[1]} after`], // Reminder to go mid after tower assignments; sneak preview of your first S/D spot
    [`${instructions[1]}`, `mit`], // First S/D (stack/def) spot; mit reminder
    [`${instructions[2]}`, `mit`], // Second S/D spot (non-healers can use same mit message for every hit)
    [`${instructions[3]}`, `mit`], // Third S/D spot
    [`${instructions[4]}`, `mit`], // Fourth S/D spot
    [`platform`], // Which side to go for tower platforms - replace with "east" or "west"
    [`${tower[0]}`, `${tower[2]}`], // Tower side; tower mechanic
    [`doom`, `${tower[3]}`], // Esuna reminder; where to go for cone spreads 
    [`${tower[3]}`], // Where to go for cone spreads
    [`${cardsOrInters}`, `mit`], // Where to go for first clone stacks; mit reminder
    [`${safePlatform}`], // Which platform (and where) will be safe for clone telegraph
    [`${cardsOrInters == "cards" ? ("inters") : ("cards")}`], // Where to go for second clone stacks
    [`${portalClone}`], // Where to go to dodge the final clone telegraph
    [`pot soon!`], // Pot reminder
    [`mit`], // Mits for Arcadian Hell 1
    [`more mit`] // Mits for Arcadian Hell 2
]

// // TEMPLATE FOR MITS OBJECTS
// const mits = {
//     tethers: "",
//     preMeteor: "",
//     postMeteor: "",
//     preSD: "",
//     SD: ["", "", "", ""],
//     stacks1: "",
//     stacks2: "",
//     idyllic: "",
//     preHell1: "",
//     postHell1: "",
//     hell2: ""
// }

sgeMits = {
    tethers: "eprog",
    preMeteor: "late kera",
    postMeteor: "ixo eprog",
    preSD: "phys phil eprog",
    SD: ["pan zoe kera", `${firstMech == "stacks" ? ("eprog holos") : ("top-up")}`, "", ""],
    stacks1: "",
    stacks2: "",
    idyllic: "",
    preHell1: "",
    postHell1: "",
    hell2: ""
}

let sgeOutput = [
    [`${myJob?.quadrant}`, `${getFirstMessage(uptime, myJob)}`],
    [`${myJob?.quadrant} ${myJob?.mechanic}`],
    [`${hourglassLocation || "?"}`, `eprog`],
    [`east`, `late kera`, `ixo eprog`],
    [`phys phil eprog`, `${instructions[1]} after`],
    [`${instructions[1]}`, `pan zoe kera`],
    [`${instructions[2]}`, `${firstMech == "stacks" ? ("eprog holos") : ("top-up")}`],
    [`${instructions[3]}`, `${firstMech == "stacks" ? ("top-up") : ("eprog holos")}`],
    [`${instructions[4]}`, `${firstMech == "stacks" ? ("eprog ixo") : ("top-up")}`],
    [`east`, `${firstMech == "stacks" ? ("top-up") : ("eprog ixo")}`],
    [`${tower[0]}`, `${tower[2]}`],
    [`esuna`, `${tower[3]}`],
    [`${tower[3]}`],
    [`${cardsOrInters}`, `eprog kera`],
    [`${safePlatform}`, `ixo`],
    [`${cardsOrInters == "cards" ? ("inters") : ("cards")}`, `eprog`],
    [`${portalClone}`, `eprog kera`],
    [`pot soon!`],
    [`phys eprog holos`, `zoe eprog`],
    [`pan kera`]
]

export const outputMessages = {
    generic: genericOutput,
    SGE: sgeOutput,
}