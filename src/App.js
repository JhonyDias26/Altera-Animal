import './App.css';
import { useState } from 'react';
import CardAnimal from './componentes/CardAnimal';
import CardInformacoes from './componentes/CardInformacoes';
import Topo from './componentes/Topo';

export default function App() {
  const [imgAnimal, setImagemAnimal] = useState("cachorro");

  
  return (
    <div className="App centralizar">
      <Topo tipoAnimal={imgAnimal} setState={setImagemAnimal} />
      <CardAnimal tipoAnimal={imgAnimal} />
      <CardInformacoes tipoAnimal={imgAnimal} />
    </div>
  );
}