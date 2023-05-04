import React from "react";

import "./DispoBaja.css";

function DispoBaja({
  dispoBaja,
  dispoInstitucion,
  dispoCargo,
  dispoCategoria,
  dispoTurno,
  dispoRevista,
  dispoPlanilla,
  dispoNumero,
  setDispoBaja,
  setDispoInstitucion,
  setDispoCargo,
  setDispoCategoria,
  setDispoTurno,
  setDispoRevista,
  setDispoPlanilla,
  setDispoNumero,
}) {
  return (
    <div className="dispo-container">
      <h1>Datos Dispo Baja</h1>
      <div className="datos-container">
        <div className="dispo-left-container">
          <div className="fecha-container">
            <h3>Fecha de Baja</h3>
            <input
              type="date"
              name=""
              id=""
              value={dispoBaja}
              onChange={(e) => setDispoBaja(e.target.value)}
            />
          </div>
          <div className="cargo-container">
            <h3>Cargo Maestro</h3>
            <input
              type="text"
              name=""
              id=""
              value={dispoCargo}
              onChange={(e) => setDispoCargo(e.target.value)}
            />
          </div>
          <div className="turno-container">
            <h3>Turno</h3>
            <select
              name=""
              id=""
              value={dispoTurno}
              onChange={(e) => setDispoTurno(e.target.value)}
            >
              <option value="Mañana" defaultValue>
                Mañana
              </option>
              <option value="Tarde">Tarde</option>
              <option value="Mañana y Tarde">Mañana y Tarde</option>
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
          <div className="categoria-container">
            <h3>Categoria</h3>
            <input
              type="number"
              min="0"
              name=""
              id=""
              value={dispoCategoria}
              onChange={(e) => setDispoCategoria(e.target.value)}
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
              <option value="Titular">Titular</option>
            </select>
          </div>
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

export default DispoBaja;
