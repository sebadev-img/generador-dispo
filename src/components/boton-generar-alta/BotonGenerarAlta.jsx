import React from "react";

import "./BotonGenerarAlta.css";

import crearDispoAlta from "../../utils/generarDispoAlta";

function BotonGenerarAlta({ datos }) {
  return (
    <div className="btn-container">
      <button onClick={() => crearDispoAlta(datos)}>Generar Dispo</button>
    </div>
  );
}

export default BotonGenerarAlta;
