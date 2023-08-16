import './App.css';
import { useState } from 'react';
import CardAnimal from './componentes/CardAnimal';
import CardInformacoes from './componentes/CardInformacoes';
import Topo from './componentes/Topo';

export default function App() {
  const [imgAnimal, setImagemAnimal] = useState("cachorro");
  const alterarState = () => {
    imgAnimal === "cachorro" ? setImagemAnimal("gato") : setImagemAnimal("cachorro")
  };
  
  return (
    <div className="App centralizar">
      <Topo passandoEstado={alterarState} />
      <CardAnimal tipoAnimal={imgAnimal} />
      <CardInformacoes tipoAnimal={imgAnimal} />
    </div>
  );
}