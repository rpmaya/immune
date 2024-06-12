import { useState } from "react";
//import Mensaje from "./Mensaje";

const Login = ({ getResult }) => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    //const [result, setResult] = useState(false)

    const handleUserChange = (e) => setUser(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        const usernameCorrecto = 'admin';
        const passwordCorrecto = '123456';
        getResult(user === usernameCorrecto && password === passwordCorrecto)
        //setResult(user === usernameCorrecto && password === passwordCorrecto)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="usuario">Usuario:</label>
                <input type="text" onChange={handleUserChange} />
                <label className="form-label">Contraseña</label>
                <input type="text" className="form-control" onChange={handlePasswordChange} />
                <button>Enviar</button>
            </form>
        </>
    )
    //{result ? <Mensaje mensaje="OK" /> : <Mensaje mensaje="KO" />}
}
export default Login;


