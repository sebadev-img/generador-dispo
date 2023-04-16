import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/main/MainPage";
import DispoAltaPage from "./pages/dispo_alta/DispoAltaPage";
import DispoBajaPage from "./pages/dispo_baja/DispoBajaPage";
import DispoFuncionPage from "./pages/dispo_cfuncion/DispoFuncionPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/generador-dispo/",
      element: <MainPage></MainPage>,
      children: [
        {
          path: "dispoalta",
          element: <DispoAltaPage></DispoAltaPage>,
        },
        {
          path: "dispobaja",
          element: <DispoBajaPage></DispoBajaPage>,
        },
        {
          path: "dispofuncion",
          element: <DispoFuncionPage></DispoFuncionPage>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
