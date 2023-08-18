import React from "react";
import "../App.css";

export default function Topo(props) {
    const alterarState = () => {
        props.tipoAnimal === "cachorro" ? props.setState("gato") : props.setState("cachorro")
    };
    return (
        <header>
            <h1>Projeto Props + useState</h1>
            <p className='primeiro'>Clique no botão para mudar a imagem e os componentes abaixo</p>
            <button onClick={alterarState}>Mudar Animal</button>
        </header>
    );
}