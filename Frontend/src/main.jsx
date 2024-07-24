import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Route';
import Hero from './Components/Hero/Hero';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Route/>,
    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path : '/home',
        element: <Hero/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
