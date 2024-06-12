import { useState } from "react";

const Formulario = ({ tareaEnviada }) => {
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
    return <div className="formulario">
        <form onSubmit={handleSubmit}>
            <div>
                <label className="form-label">Texto</label>
                <input type="text" className="form-control" onChange={(event) => handleChange(event, 'texto')} />
            </div>
            <div>
                <label className="form-label">Prioridad</label>
                <select className="form-control" onChange={(event) => handleChange(event, 'prioridad')}>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>
            </div>
            <button>Enviar</button>
        </form>
    </div>
}

export default Formulario;

