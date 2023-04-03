import React from "react";

import "./BotonGenerar.css";

import crearDispoAlta from "../../utils/generarDispoAlta";

function BotonGenerar({ datos }) {
  return (
    <div className="btn-container">
      <button onClick={() => crearDispoAlta(datos)}>Generar Dispo</button>
    </div>
  );
}

export default BotonGenerar;
