import './App.css'
import Contacto from './components/Contacto'
import Mensaje from './components/Mensaje'
import PeopleList from './components/PeopleList'
import Registro from './components/Registro'

function App() {
  return (
    <div className="App">
      <Contacto />
      <Registro />
      <Mensaje />
      <PeopleList />
    </div>
  );
}

export default App;
