import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Inicio from './views/Inicio';
import Contacto from './views/Contacto';
import Nosotros from './views/Nosotros';
import Ubicacion from './views/Ubicacion';
import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Inicio />
  },
  {
    path:'/Contacto',
    element: <Contacto />
  },
  {
    path: '/Nosotros',
    element:<Nosotros />
  },
  {
    path:'/Ubicacion',
    element: <Ubicacion />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your Inicio, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
