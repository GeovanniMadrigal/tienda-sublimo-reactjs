import React from "react";
import  '../css/Producto.css';

function Producto (){
    return(
        <div className="contenedor-producto">
            <img className="imagen-producto" 
            src="https://http2.mlstatic.com/D_NQ_NP_963696-MLM47883199371_102021-O.jpg"
            alt="Imagen de playera"/>
            <div className="contenedor-propiedades">
            <p>$100</p>
            <p>Descripcion</p>
            <img src={require('../iconos/carrito.png')} alt="carrito" />
            </div>
        </div>
    );
}

export default Producto;