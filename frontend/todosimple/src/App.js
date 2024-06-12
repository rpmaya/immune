import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {

  const [tareas, setTareas] = useState([]);

  const handleTareaEnviada = (tarea) => {
    setTareas([
      ...tareas,
      tarea
    ]);
  }

  return (
    <div className="App">
      <p>{tareas.length}</p>
      <Formulario tareaEnviada={handleTareaEnviada} />
      <Lista arrTareas={tareas} />
    </div>
  );
}


export default App;
