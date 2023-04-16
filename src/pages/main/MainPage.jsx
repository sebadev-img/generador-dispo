import React from "react";

import "../main/MainPage.css";

import { Outlet } from "react-router-dom";

import Sidenav from "../../components/sidenav/Sidenav";

function MainPage() {
  return (
    <div className="mainpage-container">
      <div className="left-container">
        <Sidenav></Sidenav>
      </div>
      <div className="right-container">
        Si encontras un error o tenes una idea para mejorar la app mandame un
        mail a <strong>sebastiandev.img@gmail.com</strong>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default MainPage;
