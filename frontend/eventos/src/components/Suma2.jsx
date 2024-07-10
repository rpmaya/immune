import { useState } from "react";

function Suma2 ( { numA, numB, sumaResuelta } ) {

    const [resultado, setResultado] = useState(0);
    
    const handleClick = () => {
        const resultado = numA + numB;
        setResultado(resultado);
        sumaResuelta(resultado);
    }
    return (
        <>
            <h2>Suma 2</h2>
            <button onClick={handleClick}>Calcula el resultado</button>
            <p>El resultado de la suma de {numA} y {numB} es {resultado}</p>
        </>
    )
}

export default Suma2;
