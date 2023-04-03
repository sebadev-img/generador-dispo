import React from "react";

import "./Acta.css";

function Acta({
  actaNumero,
  actaOrden,
  actaFolio,
  setActaNumero,
  setActaOrden,
  setActaFolio,
}) {
  return (
    <div className="acta-container">
      <h1>Datos Acta</h1>
      <div className="datos-acta-container">
        <div className="actanum-container">
          <h3>Numero de Acta</h3>
          <input
            type="number"
            min="0"
            name=""
            id=""
            value={actaNumero}
            onChange={(e) => setActaNumero(e.target.value)}
          />
        </div>
        <div className="orden-container">
          <h3>Numero de Orden</h3>
          <input
            type="number"
            min="0"
            name=""
            id=""
            value={actaOrden}
            onChange={(e) => setActaOrden(e.target.value)}
          />
        </div>
        <div className="folio-container">
          <h3>Numero de Folio</h3>
          <input
            type="number"
            min="0"
            name=""
            id=""
            value={actaFolio}
            onChange={(e) => setActaFolio(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Acta;
