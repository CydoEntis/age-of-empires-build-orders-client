import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuildForm from "./features/create-build/BuildForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import Build from "./pages/Build";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "",
        element: <App />,
      },
      {
        path: "build/create",
        element: <BuildForm />,
      },
      {
        path: "build/:buildId",
        element: <Build />
      },
    ],
  },
]);

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {            main: "#275271",
            dark: "#275271",
          },
          secondary: {
            main: "#fff"
          },
          background: {
            default: "#f1f3f6",
            paper: "#ffffff",
            contrastText: "#333",
            light: "#fff"
          },
        }
      : {
          primary: {
            // main: "#CFB983",
            // dark: "#ab986a",
            main: "#e9c56a",
            dark: "#c4a24d",
          },
          background: {
            // default: '#191D2B',
            // default: '#1F2538',
            // default: '#0E1019', Chosen
            // default: "#0f111b",
            default: "#10101B",
            // paper: '#232A3F',
            // paper: '#2A354D',
            // paper: '#161927', Chosen
            paper: "#191c2b",
            // paper: "#275271",
          },
        }),
  },
});

const theme = createTheme(getDesignTokens("dark"));

// const defaultTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#CFB983",
//       dark: "#ab986a",
//     },
//     background: {
//       // default: '#191D2B',
//       // default: '#1F2538',
//       // default: '#0E1019', Chosen
//       default: "#0f111b",
//       // paper: '#232A3F',
//       // paper: '#2A354D',
//       // paper: '#161927', Chosen
//       paper: "#191c2b",
//     },
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
