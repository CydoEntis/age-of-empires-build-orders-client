import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import BuildForm from './features/build-forms/BuildForm';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Layout />,
    children: [
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/",
        element: <App />
      },
      {
        path: "/create",
        element: <BuildForm />
      },
      {
        path: "builds/:buildId"
      },

    ]
  },



]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
