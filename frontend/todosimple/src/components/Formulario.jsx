import { useState } from "react";

function Formulario({ tareaEnviada }) {
    const [data, setData] = useState({
        texto: '',
        prioridad: 'baja'
    });
    const handleChange = (event, field) => {
        setData({
            ...data,
            [field]: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        tareaEnviada(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Texto</label>
                    <input type="text" onChange={(event) => handleChange(event, 'texto')} />
                </div>
                <div>
                    <label>Prioridad</label>
                    <select onChange={(event) => handleChange(event, 'prioridad')}>
                        <option value="baja">Baja</option>
                        <option value="media">Media</option>
                        <option value="alta">Alta</option>
                    </select>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;

