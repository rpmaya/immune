import logo from './logo.svg';
import './App.css';
import BotonSimple from './components/BotonSimple';
import EligeBoton from './components/EligeBoton';
import Suma from './components/Suma';
import Suma2 from './components/Suma2';
import Eventos from './components/Eventos';
import Contador from './components/Contador';

function App() {

  const handleSumaResuelta = (resultado) => {
    console.log(`Se ha resuelto la suma con resultado: ${resultado}`)
  }

  const handleInformaResultado = (resultado) => {
    console.log(`El contador tiene un valor de ${resultado}`)
  }

  return (
    <div className="App">
          <BotonSimple />
          <EligeBoton />
          <Suma 
            numA={5}
            numB={10}
          />
          <Eventos />
          <Suma2 
            numA={5}
            numB={11}
            sumaResuelta={handleSumaResuelta}
          />
          <Contador informaResultado={handleInformaResultado} />
    </div>
  )
}

export default App;
