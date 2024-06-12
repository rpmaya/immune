import { useState } from "react";
const Suma = ({ numA, numB }) => {
    const [resultado, setResultado] = useState(0);
    const handleClick = () => {
        setResultado(numA + numB);
    }
    return <div>
        <h2>Suma</h2>
        <button onClick={handleClick}>Calcula el resultado</button>
        <p>El resultado de la suma de {numA} y {numB} es {resultado}</p>
    </div>
}
export default Suma;
