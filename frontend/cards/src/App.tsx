import React from 'react';
import './App.css';
import './styles/Card.css'
import Card from './components/Card';

function App() {
  return (
    <div className="cards-container">
      <Card
        name="Juan Pérez"
        title="Desarrollador de Software"
        email="juan.perez@example.com"
        phone="(123) 456-7890"
      />
      <Card
        name="María García"
        title="Gerente de Proyectos"
        email="maria.garcia@example.com"
        phone="(098) 765-4321"
      />
      <Card
        name="Ricardo Palacios"
        title="Web3 developer"
        email="ricardo.palacios@immune.com"
        phone="(098) 745-4331"
      />
      <Saludo name = "Luis"/>
    </div>
  );
}
