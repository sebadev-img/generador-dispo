import React from "react";

import "./BotonGenerarBaja.css";

import crearDispoBaja from "../../utils/generarDispoBaja";

function BotonGenerarBaja({ datos }) {
  return (
    <div className="btn-container">
      <button onClick={() => crearDispoBaja(datos)}>Generar Dispo</button>
    </div>
  );
}

export default BotonGenerarBaja;
