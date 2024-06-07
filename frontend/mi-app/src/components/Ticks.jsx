import { useState, useEffect } from "react";

function Ticks(props) {
    
    const [timer, setTimer] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(time, 1000)
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [])
    
    const time = () => {
        setTimer(new Date().toLocaleTimeString())
    }

    return (
        <>
            <h1>{props.titulo}</h1>
            <h2>{timer}</h2>
        </>
    )
}
export default Ticks