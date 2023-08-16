import React from "react";
import "./Componentes.css";

export default function CardInformacoes(props) {
  let tipoCachorro = "Cachorro";
  let tipoGato = "Gato";
  let infoCachorro = "É um mamífero carnívoro da família dos canídeos";
  let infoGato = "É um mamífero carnívoro da família dos felídeos";

  return (
    <div className="CardInformacao">
      <h3>Informação sobre o {props.tipoAnimal === "cachorro" ? tipoCachorro : tipoGato}</h3>
      <p>{props.tipoAnimal === "cachorro" ? infoCachorro : infoGato}</p>
    </div>
  );
}