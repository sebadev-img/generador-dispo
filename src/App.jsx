import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/MainPage";
import DispoAltaPage from "./pages/dispoAltaPage";
import DispoBajaPage from "./pages/DispoBajaPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
