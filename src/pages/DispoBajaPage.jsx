import React from "react";

import "./DispoBajaPage.css";

import DocenteInfo from "../components/docente/DocenteInfo";
import DispoBaja from "../components/baja/DispoBaja";
import BotonGenerarBaja from "../components/boton-generar-baja/BotonGenerarBaja";

import { useEffect, useState } from "react";

import getTodayDate from "../utils/getTodayDate";

function DispoBajaPage() {
  const [docNombre, setDocNombre] = useState("");
  const [docDNI, setDocDNI] = useState(0);
  const [docLegAdmi, setDocLegAdmi] = useState(0);
  const [docLegJunta, setDocLegJunta] = useState(0);

  const [dispoBaja, setDispoBaja] = useState(getTodayDate());
  const [dispoInstitucion, setDispoInstitucion] = useState("");
  const [dispoCargo, setDispoCargo] = useState("");
  const [dispoCategoria, setDispoCategoria] = useState(0);
  const [dispoTurno, setDispoTurno] = useState("Mañana");
  const [dispoRevista, setDispoRevista] = useState("Suplente");
  const [dispoPlanilla, setDispoPlanilla] = useState(0);
  const [dispoNumero, setDispoNumero] = useState(0);

  let datos = {
    docNombre: docNombre,
    docDNI: docDNI,
    docLegAdmi: docLegAdmi,
    docLegJunta: docLegJunta,
    dispoBaja: dispoBaja,
    dispoInstitucion: dispoInstitucion,
    dispoCargo: dispoCargo,
    dispoCategoria: dispoCategoria,
    dispoTurno: dispoTurno,
    dispoRevista: dispoRevista,
    dispoPlanilla: dispoPlanilla,
    dispoNumero: dispoNumero,
  };

  useEffect(() => {
    console.log("ejecutado");
    datos = {
      docNombre: docNombre,
      docDNI: docDNI,
      docLegAdmi: docLegAdmi,
      docLegJunta: docLegJunta,
      dispoAlta: dispoBaja,
      dispoInstitucion: dispoInstitucion,
      dispoCargo: dispoCargo,
      dispoCategoria: dispoCategoria,
      dispoTurno: dispoTurno,
      dispoRevista: dispoRevista,
      dispoPlanilla: dispoPlanilla,
      dispoNumero: dispoNumero,
    };
  }, [
    docNombre,
    docDNI,
    docLegAdmi,
    docLegJunta,
    dispoBaja,
    dispoInstitucion,
    dispoCargo,
    dispoCategoria,
    dispoTurno,
    dispoRevista,
    dispoPlanilla,
    dispoNumero,
  ]);
  return (
    <div className="dispoBajaPage-container">
      <DocenteInfo
        docNombre={docNombre}
        docDNI={docDNI}
        docLegAdmi={docLegAdmi}
        docLegJunta={docLegJunta}
        setDocNombre={setDocNombre}
        setDocDNI={setDocDNI}
        setDocLegAdmi={setDocLegAdmi}
        setDocLegJunta={setDocLegJunta}
      ></DocenteInfo>
      <DispoBaja
        dispoBaja={dispoBaja}
        dispoInstitucion={dispoInstitucion}
        dispoCargo={dispoCargo}
        dispoCategoria={dispoCategoria}
        dispoTurno={dispoTurno}
        dispoRevista={dispoRevista}
        dispoPlanilla={dispoPlanilla}
        dispoNumero={dispoNumero}
        setDispoAlta={setDispoBaja}
        setDispoInstitucion={setDispoInstitucion}
        setDispoCargo={setDispoCargo}
        setDispoCategoria={setDispoCategoria}
        setDispoTurno={setDispoTurno}
        setDispoRevista={setDispoRevista}
        setDispoPlanilla={setDispoPlanilla}
        setDispoNumero={setDispoNumero}
      ></DispoBaja>
      <BotonGenerarBaja datos={datos}></BotonGenerarBaja>
    </div>
  );
}

export default DispoBajaPage;
