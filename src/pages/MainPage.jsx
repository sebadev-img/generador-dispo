import React from "react";

import "./MainPage.css";

import { Outlet } from "react-router-dom";

import Sidenav from "../components/sidenav/Sidenav";

function MainPage() {
  return (
    <div className="mainpage-container">
      <div className="left-container">
        <Sidenav></Sidenav>
      </div>
      <div className="right-container">
        La aplicacion por el momento solo genera Dispo de ALTA/BAJA, si
        encontras un error o tenes una idea para mejorar la app mandame un mail
        a sebastiandev.img@gmail.com
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default MainPage;
