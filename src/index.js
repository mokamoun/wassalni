import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Telecharger  from "./pages/telecharger";
import QuiSommesNous from "./pages/QuiSommesNous";
import Contact from "./pages/Contact";

// import Slideshow from '../src/test/test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/",  
    element: <Accueil />,
  },

  {
    path: "/telecharger",
    element: <Telecharger/>,
  },

  {
    path: "/quiSommesNous",
    element: <QuiSommesNous />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  // {
  //   path: "/test",
  //   element: <Slideshow/>,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
