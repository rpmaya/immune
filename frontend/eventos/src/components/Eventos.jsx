import { useState } from "react";

const Eventos = () => {

    const [text, setText] = useState('');
    const [rango, setRango] = useState(0);
    const [mensaje, setMensaje] = useState('');
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    const onChangeInput = (event) => {
        setText(event.target.value);
    }
    const onChangeRange = (event) => {
        setRango(event.target.value);
    }
    const handleOnMouseEnter = (event) => {
        setMensaje('Ha entrado el ratón')
    }
    const handleOnMouseMove = (event) => {
        setCoords({
            x: event.clientX,
            y: event.clientY
        })
    }
    return (
        <>
            <h2>Eventos</h2>
            <div className="campo-texto">
                <p>El valor del campo de texto es: {text}</p>
                <input type="text" onInput={onChangeInput} />
            </div>
            <div className="rango">
                <p>El valor del rango es: {rango}</p>
                <input type="range" min="1" max="100" step="1" onChange={onChangeRange} />
            </div>
            <div style={{
                textAlign: 'center',
                width: '200px',
                height: '200px',
                backgroundColor: 'green'
            }}
                onMouseEnter={handleOnMouseEnter}
                onMouseMove={handleOnMouseMove}
            >
                <p>{mensaje}</p>
                <p>Las coords son X: {coords.x} Y: {coords.y}</p>
            </div>
        </>
    )
}

export default Eventos;
