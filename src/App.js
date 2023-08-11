import './App.css';
import { useState } from 'react';
import ImgCachorro from './Imgs/cachorro.jpg';
import ImgGato from './Imgs/gato.jpg';

function App() {
  let imagemAnimal = "";
  let infoAnimal = "";
  let tipoAnimal = "cachorro";

  const [imgAnimal, setImagemAnimal] = useState("cachorro");
  const alterarState = () => {
    if (imgAnimal === "cachorro") {
      setImagemAnimal("gato");
    } else {
      setImagemAnimal("cachorro");
    }
  }

  if (imgAnimal === "cachorro") {
    imagemAnimal = ImgCachorro;
    infoAnimal = "É um mamífero carnívoro da família dos canídeos.";
    tipoAnimal = "Cachorro";
  } else {
    imagemAnimal = ImgGato;
    infoAnimal = "É um mamífero carnívoro da família dos felídeos.";
    tipoAnimal = "Gato"
  }

  return (
    <div className="App centralizar">
      <header>
        <h1>Projeto Props + useState</h1>
        <p className='primeiro'>Clique no botão para mudar a imagem e os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
      </header>
      <div>
        <img src={imagemAnimal} alt="animal"/>
      </div>
      <div className='box-info'>
        <h3>Informação sobre o {tipoAnimal}</h3>
        <p className='segundo'>{infoAnimal}</p>
      </div>
    </div>
  );
}
export default App;