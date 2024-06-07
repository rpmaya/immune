import './App.css';

function App() {
  //const nombre = 'Ricardo Palacios'
  const persona1 = {
    nombre: "Alicia",
    apellido: "Romero",
    edad: "34"
  }
  const nombreCompleto = (persona) => {
    return persona.nombre + ' ' + persona.apellido
  }
  return (
    <div className="App">
      <h1>Hola {nombreCompleto(persona1)}!</h1>
    </div>
  );
}

export default App;


  