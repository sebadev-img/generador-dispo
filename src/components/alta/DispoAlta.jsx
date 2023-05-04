import React from "react";

import "./DispoAlta.css";

function DispoAlta({
  dispoAlta,
  dispoInstitucion,
  dispoCargo,
  dispoCategoria,
  dispoHoras,
  dispoArticulo,
  dispoTurno,
  dispoRevista,
  dispoPlanilla,
  dispoNumero,
  setDispoAlta,
  setDispoInstitucion,
  setDispoCargo,
  setDispoCategoria,
  setDispoHoras,
  setDispoArticulo,
  setDispoTurno,
  setDispoRevista,
  setDispoPlanilla,
  setDispoNumero,
}) {
  return (
    <div className="dispo-container">
      <h1>Datos Dispo Alta</h1>
      <div className="datos-container">
        <div className="dispo-left-container">
          <div className="fecha-container">
            <h3>Fecha de Alta</h3>
            <input
              type="date"
              name=""
              id=""
              value={dispoAlta}
              onChange={(e) => setDispoAlta(e.target.value)}
            />
          </div>
          <div className="cargo-container">
            <h3>Cargo</h3>
            <input
              type="text"
              value={dispoCargo}
              onChange={(e) => setDispoCargo(e.target.value)}
            />
          </div>
          <div className="horas-container">
            <h3>Cant Horas</h3>
            <input
              type="text"
              value={dispoHoras}
              onChange={(e) => setDispoHoras(e.target.value)}
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
          <div className="articulo-container">
            <h3>Articulo</h3>
            <select
              name=""
              id=""
              value={dispoArticulo}
              onChange={(e) => setDispoArticulo(e.target.value)}
            >
              <option value="Ninguno" defaultValue>
                Ninguno
              </option>
              <option value="Artículo 7">Art 7</option>
              <option value="Artículo 9">Art 9</option>
            </select>
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

export default DispoAlta;
