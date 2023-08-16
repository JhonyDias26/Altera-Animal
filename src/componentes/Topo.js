import React from "react";
import "../App.css";

export default function Topo(props) {
    return (
        <header>
            <h1>Projeto Props + useState</h1>
            <p className='primeiro'>Clique no botão para mudar a imagem e os componentes abaixo</p>
            <button onClick={props.passandoEstado}>Mudar Animal</button>
        </header>
    );
}