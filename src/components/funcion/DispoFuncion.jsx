import React from "react";

import "./DispoFuncion.css";

function DispoFuncion({
  dispoFechaFuncion,
  dispoInstitucion,
  dispoCargoActual,
  dispoCargoFuturo,
  dispoCategoriaActual,
  dispoCategoriaFuturo,
  dispoRevista,
  dispoPlanilla,
  dispoNumero,
  setDispoFechaFuncion,
  setDispoInstitucion,
  setDispoCargoActual,
  setDispoCargoFuturo,
  setDispoCategoriaActual,
  setDispoCategoriaFuturo,
  setDispoRevista,
  setDispoPlanilla,
  setDispoNumero,
}) {
  return (
    <div className="dispo-container">
      <h1>Datos Dispo Cambio Funcion</h1>
      <div className="datos-container">
        <div className="dispo-left-container">
          <div className="fecha-container">
            <h3>Fecha de Cambio de Funcion</h3>
            <input
              type="date"
              name=""
              id=""
              value={dispoFechaFuncion}
              onChange={(e) => setDispoFechaFuncion(e.target.value)}
            />
          </div>
          <div className="cargo-actual-container">
            <h3>De Cargo</h3>
            <input
              type="text"
              value={dispoCargoActual}
              onChange={(e) => setDispoCargoActual(e.target.value)}
            />
          </div>
          <div className="categoria-actual-container">
            <h3>De Categoria</h3>
            <input
              type="text"
              value={dispoCategoriaActual}
              onChange={(e) => setDispoCategoriaActual(e.target.value)}
            />
          </div>
          <div className="revista-container">
            <h3>Sit de Revista</h3>
            <select
              name=""
              id=""
              value={dispoRevista}
              onChange={(e) => setDispoRevista(e.target.value)}
            >
              <option value="Suplente" defaultValue>
                Suplente
              </option>
              <option value="Interino">Interino</option>
            </select>
          </div>
          <div className="planilla-container">
            <h3>Planilla Movimiento Nº</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                style={{ display: "inline-block", verticalAlign: "middle" }}
                type="number"
                min="0"
                name=""
                id=""
                value={dispoPlanilla}
                onChange={(e) => setDispoPlanilla(e.target.value)}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginTop: "8px",
                  height: "23px",
                  borderBottom: "2px solid rgb(219, 219, 219)",
                }}
              >
                /2023
              </p>
            </div>
          </div>
        </div>
        <div className="dispo-right-container">
          <div className="institucion-container">
            <h3>Institucion</h3>
            <input
              type="text"
              value={dispoInstitucion}
              onChange={(e) => setDispoInstitucion(e.target.value)}
            />
          </div>
          <div className="cargo-futuro-container">
            <h3>A Cargo</h3>
            <input
              type="text"
              value={dispoCargoFuturo}
              onChange={(e) => setDispoCargoFuturo(e.target.value)}
            />
          </div>
          <div className="categoria-futuro-container">
            <h3>A Categoria</h3>
            <input
              type="text"
              value={dispoCategoriaFuturo}
              onChange={(e) => setDispoCategoriaFuturo(e.target.value)}
            />
          </div>
          <div className="empty-container" style={{ height: "100%" }}></div>
          <div className="disponum-container">
            <h3>Disposicion Nº</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                style={{ display: "inline-block" }}
                type="number"
                min="0"
                name=""
                id=""
                value={dispoNumero}
                onChange={(e) => setDispoNumero(e.target.value)}
              />
              <p
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                  height: "23px",
                  borderBottom: "2px solid rgb(219, 219, 219)",
                }}
              >
                /2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DispoFuncion;
