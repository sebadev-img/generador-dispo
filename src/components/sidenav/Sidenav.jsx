import React from "react";

import { Link } from "react-router-dom";

import "./Sidenav.css";

function Sidenav() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to="dispoalta">Dispo Alta</Link>
        </li>
        <li>
          <Link to="dispobaja">Dispo Baja</Link>
        </li>
        <li>
          <Link to="dispofuncion">Dispo C. Funcion</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;
