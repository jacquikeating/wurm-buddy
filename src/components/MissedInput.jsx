import { useContext, useEffect, useState } from "react"

export default function MissedInput({   }) {
    const [display, setDisplay] = useState(true)
    
    if (display) {
        return (
            <div className="missed-input">Missed input!</div>
        )
    } 
}