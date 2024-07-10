import { useState } from "react";


export default function Formulario ({ enviaData }) {
    const [data, setData] = useState({
        nombre: '',
        apellidos: '',
        edad: ''
    });
    const handleChange = (event, field) => {
        setData({
            ...data,
            [field]: event.target.value
        });
    }
    const handleClick = () => {
        enviaData(data);
    }
    return <div>
        <div>
            <p>{data.nombre}</p>
            <p>{data.apellidos}</p>
            <p>{data.edad}</p>
        </div>
        <div>
            <label>Nombre</label>
            <input type="text" onChange={event => handleChange(event, 'nombre')} />
        </div>
        <div>
            <label>Apellidos</label>
            <input type="text" onChange={event => handleChange(event, 'apellidos')} />
        </div>
        <div>
            <label>Edad</label>
            <input type="text" onChange={event => handleChange(event, 'edad')} />
        </div>
        <button onClick={handleClick}>Enviar</button>
    </div>;
}
//export default Formulario;
