import "./App.css";

import DocenteInfo from "./components/docente/DocenteInfo";
import DispoInfo from "./components/alta/DispoAlta";
import Acta from "./components/acta/Acta";
import { useEffect, useState } from "react";

import getTodayDate from "./utils/getTodayDate";
import BotonGenerar from "./components/boton-generar/BotonGenerar";

function App() {
  const [docNombre, setDocNombre] = useState("");
  const [docDNI, setDocDNI] = useState(0);
  const [docLegAdmi, setDocLegAdmi] = useState(0);
  const [docLegJunta, setDocLegJunta] = useState(0);

  const [actaNumero, setActaNumero] = useState(0);
  const [actaOrden, setActaOrden] = useState(0);
  const [actaFolio, setActaFolio] = useState(0);

  const [dispoAlta, setDispoAlta] = useState(getTodayDate());
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
    actaNumero: actaNumero,
    actaOrden: actaOrden,
    actaFolio: actaFolio,
    dispoAlta: dispoAlta,
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
      actaNumero: actaNumero,
      actaOrden: actaOrden,
      actaFolio: actaFolio,
      dispoAlta: dispoAlta,
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
    actaNumero,
    actaOrden,
    actaFolio,
    dispoAlta,
    dispoInstitucion,
    dispoCargo,
    dispoCategoria,
    dispoTurno,
    dispoRevista,
    dispoPlanilla,
    dispoNumero,
  ]);

  return (
    <div className="App">
      <div className="left-container">
        La aplicacion por el momento solo genera Dispo de ALTA, si encontras un
        error o tenes una idea para mejorar la app mandame un mail a
        sebastiandev.img@gmail.com
      </div>
      <div className="right-container">
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
        <Acta
          actaNumero={actaNumero}
          actaOrden={actaOrden}
          actaFolio={actaFolio}
          setActaNumero={setActaNumero}
          setActaOrden={setActaOrden}
          setActaFolio={setActaFolio}
        ></Acta>
        <DispoInfo
          dispoAlta={dispoAlta}
          dispoInstitucion={dispoInstitucion}
          dispoCargo={dispoCargo}
          dispoCategoria={dispoCategoria}
          dispoTurno={dispoTurno}
          dispoRevista={dispoRevista}
          dispoPlanilla={dispoPlanilla}
          dispoNumero={dispoNumero}
          setDispoAlta={setDispoAlta}
          setDispoInstitucion={setDispoInstitucion}
          setDispoCargo={setDispoCargo}
          setDispoCategoria={setDispoCategoria}
          setDispoTurno={setDispoTurno}
          setDispoRevista={setDispoRevista}
          setDispoPlanilla={setDispoPlanilla}
          setDispoNumero={setDispoNumero}
        ></DispoInfo>
        <BotonGenerar datos={datos}></BotonGenerar>
      </div>
    </div>
  );
}

export default App;
