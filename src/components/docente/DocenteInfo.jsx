import React from "react";

import "./DocenteInfo.css";

function DocenteInfo({
  docNombre,
  docDNI,
  docLegAdmi,
  docLegJunta,
  setDocNombre,
  setDocDNI,
  setDocLegJunta,
  setDocLegAdmi,
}) {
  return (
    <div className="docente-container">
      <h1>Datos del Docente</h1>
      <div className="datos-container">
        <div className="doc-left-container">
          <div className="nombre-container">
            <h3>Apellido y Nombre</h3>
            <input
              type="text"
              value={docNombre}
              onChange={(e) => setDocNombre(e.target.value)}
            />
          </div>
          <div className="legajo-adm-container">
            <h3>Legajo Administrativo</h3>
            <input
              type="number"
              min="0"
              name=""
              id=""
              value={docLegAdmi}
              onChange={(e) => setDocLegAdmi(e.target.value)}
            />
          </div>
        </div>
        <div className="doc-right-container">
          <div className="dni-container">
            <h3>DNI</h3>
            <input
              type="number"
              min="0"
              name=""
              id=""
              value={docDNI}
              onChange={(e) => setDocDNI(e.target.value)}
            />
          </div>
          <div className="legajo-junt-container">
            <h3>Legajo Junta</h3>
            <input
              type="number"
              min="0"
              name=""
              id=""
              value={docLegJunta}
              onChange={(e) => setDocLegJunta(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocenteInfo;
