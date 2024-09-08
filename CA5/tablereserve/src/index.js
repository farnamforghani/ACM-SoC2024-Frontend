import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/stylesheets/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeArray } from './route';

const router = createBrowserRouter(routeArray);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

