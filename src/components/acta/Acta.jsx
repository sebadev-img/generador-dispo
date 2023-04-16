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
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              style={{ display: "inline-block", verticalAlign: "middle" }}
              type="number"
              min="0"
              name=""
              id=""
              value={actaNumero}
              onChange={(e) => setActaNumero(e.target.value)}
            />
            <p
              style={{
                display: "inline-block",
                marginTop: "8px",
                height: "23px",
                verticalAlign: "middle",
                borderBottom: "2px solid rgb(219, 219, 219)",
              }}
            >
              /2023
            </p>
          </div>
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
