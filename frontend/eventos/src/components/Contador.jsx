import { useState } from "react";

const Contador = ({ informaResultado }) => {

    const [numero, setNumero] = useState(0);

    const handleClick = () => {
        setNumero(numero + 1);
    }

    const inform = () => {
        informaResultado(numero)
    }
    
    return (
        <>
            <p>{numero}</p>
            <button onClick={handleClick}>Sube contador</button>
            <button onClick={(event) => informaResultado(numero)}>Informa Resultado</button>
        </>
    )
}

export default Contador;
