import MainContainer from "../components/MainContainer"

export const tasks = [
    { time: 26000, action: () => setStep(4) },
    { time: 48000, action: () => timeline48() },
    { time: 55000, action: () => console.log(`Run ${hourglassLocation}`)}
]

function timeline48 () {
    setStep(6);
    // callout: `Take ${myJob.mechanic} tether. Eprog.`
    console.log(`Take ${myJob.mechanic} tether. Eprog.`)
}