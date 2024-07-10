import { useState, useEffect } from 'react'

function Animales() {
    const [animal, setAnimal] = useState("")

    useEffect(() => {
        setAnimal("tigre")
    }, [])

    return (
            <h1>{animal}</h1>

    )
}

export default Animales