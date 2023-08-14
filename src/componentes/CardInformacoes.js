import React from "react";
import "./Componentes.css";

export default function CardInformacoes(props) {
  return (
    <div className="CardInformacao">
      <h3>Informação sobre o {props.tipoAnimal}</h3>
      <p>{props.infoAnimal}</p>
    </div>
  );
}