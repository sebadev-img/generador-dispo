import React from "react";

import DocenteInfo from "../../components/docente/DocenteInfo";
import DispoFuncion from "../../components/funcion/DispoFuncion";

import { useEffect, useState } from "react";

import getTodayDate from "../../utils/getTodayDate";
import BotonGenerarFuncion from "../../components/boton-generar-funcion/BotonGenerarFuncion";

function DispoFuncionPage() {
  const [docNombre, setDocNombre] = useState("");
  const [docDNI, setDocDNI] = useState(0);
  const [docLegAdmi, setDocLegAdmi] = useState("");
  const [docLegJunta, setDocLegJunta] = useState(0);

  const [dispoFechaFuncion, setDispoFechaFuncion] = useState(getTodayDate());
  const [dispoInstitucion, setDispoInstitucion] = useState("");
  const [dispoCargoActual, setDispoCargoActual] = useState("");
  const [dispoCargoFuturo, setDispoCargoFuturo] = useState("");
  const [dispoCategoriaActual, setDispoCategoriaActual] = useState(0);
  const [dispoCategoriaFuturo, setDispoCategoriaFuturo] = useState(0);
  const [dispoRevista, setDispoRevista] = useState("Suplente");
  const [dispoPlanilla, setDispoPlanilla] = useState(0);
  const [dispoNumero, setDispoNumero] = useState(0);

  let datos = {
    docNombre: docNombre,
    docDNI: docDNI,
    docLegAdmi: docLegAdmi,
    docLegJunta: docLegJunta,
    dispoFechaFuncion: dispoFechaFuncion,
    dispoInstitucion: dispoInstitucion,
    dispoCargoActual: dispoCargoActual,
    dispoCargoFuturo: dispoCargoFuturo,
    dispoCategoriaActual: dispoCategoriaActual,
    dispoCategoriaFuturo: dispoCategoriaFuturo,
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
      dispoFechaFuncion: dispoFechaFuncion,
      dispoInstitucion: dispoInstitucion,
      dispoCargoActual: dispoCargoActual,
      dispoCargoFuturo: dispoCargoFuturo,
      dispoCategoriaActual: dispoCategoriaActual,
      dispoCategoriaFuturo: dispoCategoriaFuturo,
      dispoRevista: dispoRevista,
      dispoPlanilla: dispoPlanilla,
      dispoNumero: dispoNumero,
    };
  }, [
    docNombre,
    docDNI,
    docLegAdmi,
    docLegJunta,
    dispoFechaFuncion,
    dispoInstitucion,
    dispoCargoActual,
    dispoCargoFuturo,
    dispoCategoriaActual,
    dispoCategoriaFuturo,
    dispoRevista,
    dispoPlanilla,
    dispoNumero,
  ]);
  return (
    <div>
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
      <DispoFuncion
        dispoFechaFuncion={dispoFechaFuncion}
        dispoInstitucion={dispoInstitucion}
        dispoCargoActual={dispoCargoActual}
        dispoCargoFuturo={dispoCargoFuturo}
        dispoCategoriaActual={dispoCategoriaActual}
        dispoCategoriaFuturo={dispoCategoriaFuturo}
        dispoRevista={dispoRevista}
        dispoPlanilla={dispoPlanilla}
        dispoNumero={dispoNumero}
        setDispoFechaFuncion={setDispoFechaFuncion}
        setDispoInstitucion={setDispoInstitucion}
        setDispoCargoActual={setDispoCargoActual}
        setDispoCargoFuturo={setDispoCargoFuturo}
        setDispoCategoriaActual={setDispoCategoriaActual}
        setDispoCategoriaFuturo={setDispoCategoriaFuturo}
        setDispoRevista={setDispoRevista}
        setDispoPlanilla={setDispoPlanilla}
        setDispoNumero={setDispoNumero}
      ></DispoFuncion>
      <BotonGenerarFuncion datos={datos}></BotonGenerarFuncion>
    </div>
  );
}

export default DispoFuncionPage;
