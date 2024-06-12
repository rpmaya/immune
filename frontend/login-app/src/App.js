import { useState } from 'react'
import './App.css';
import Login from './components/Login';
import Mensaje from './components/Mensaje';


function App() {
  const [result, setResult] = useState(false)

  const getResult = (r) => {
    setResult(r)
  }

  return (
    <div className="App">
      <Login getResult={getResult} />
      {result ? <Mensaje mensaje="OK" /> : <Mensaje mensaje="KO" />}
    </div>
  );
}

export default App;
