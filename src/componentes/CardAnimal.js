import React from "react";
import "./Componentes.css";
import ImagemGato from "../Imgs/gato.jpg";
import ImagemCachorro from "../Imgs/cachorro.jpg"

export default function CardAnimal(props) {
    return (
        <div className= "CardAnimal" >
            <img src={ props.tipoAnimal === "cachorro" ? ImagemCachorro : ImagemGato } alt = "animal" />
        </div>
    );
}