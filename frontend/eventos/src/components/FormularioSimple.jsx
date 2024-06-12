import { useState } from 'react';

const FormularioSimple = () => {

    const [valor, setValor] = useState('');

    const handleOnChange = (event) => {
        setValor(event.target.value);
    }

    const handleOnClick = () => {
        setValor('Valor después del click');
    }

    return <div>
        <p>{valor}</p>
        <input type="text" value={valor} onChange={handleOnChange} />
        <button onClick={handleOnClick}>Cambia valor</button>
    </div>;
}

export default FormularioSimple;

