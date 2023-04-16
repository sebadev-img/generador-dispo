import React from "react";

import "./BotonGenerarFuncion.css";

import crearDispoFuncion from "../../utils/generarDispoFuncion";

function BotonGenerarFuncion({ datos }) {
  return (
    <div className="btn-container">
      <button onClick={() => crearDispoFuncion(datos)}>Generar Dispo</button>
    </div>
  );
}

export default BotonGenerarFuncion;
