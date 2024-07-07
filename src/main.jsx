import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import "./App.css"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage.jsx';
import ServicePage from './Components/ServicePage/ServicePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
  },
  {
    path: "/bookslot",
    element: (
      <ServicePage />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
