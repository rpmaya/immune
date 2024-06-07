import './App.css';
import Ticks from './components/Ticks'

function App() {
  //const nombre = 'Ricardo Palacios'
  const usuario = {
    nombre: 'Mario',
    avatar: 'https://mighty.tools/mockmind-api/content/human/60.jpg'
  }
  const persona1 = {
    nombre: "Alicia",
    apellido: "Romero",
    edad: "34"
  }
  const nombreCompleto = (persona) => {
    return persona.nombre + ' ' + persona.apellido
  }
  const saludar = (persona) => {
    return (persona) ? <h1>Hola {nombreCompleto(persona)}</h1> : <h1>Hola desconocido</h1>
  }

  return (
    <div className="App">
      {saludar(persona1)}
      {saludar()}
      <p style={{ backgroundColor: 'red', color: 'white' }}>Párrafo con estilos</p>
      <img src={usuario.avatar} style={{width: '200px', height: '200px'}} alt="avatar"/>
      <Ticks titulo="Hora" />
      <Ticks titulo="Time" />
    </div>
  );
}

export default App;


