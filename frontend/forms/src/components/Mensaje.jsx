import { useEffect, useState } from "react"

export default function Mensaje() {

    const [num, setNum] = useState(0)
    const [mensaje, setMensaje] = useState('Mensaje inicial')

    useEffect(() => {
        console.log('[Mensaje] useEffect')
    }, []) /* Al iniciarse, solo una vez */
    //}, [mensaje]) /* Cuando cambia mensaje */
    return (
        <div>
            <h3>Mensajes</h3>
            <p>{mensaje}</p>
            <p>{num}</p>
            <button onClick={() => setNum(num + 1)}>Aumenta</button>
            <input type="text" onChange={(e) => setMensaje(e.target.value)} />
        </div>
    )
}
