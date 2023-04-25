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
  GlobalStyles,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import Build from "./pages/Build";
import DancingScript from "./assets/fonts/DancingScript-Regular.ttf";
import { store } from "./store/store";
import { Provider } from "react-redux";
import CreateBuild from "./pages/CreateBuild";

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
        path: "builds/create",
        element: <CreateBuild />,
      },
      {
        path: "build/:buildId",
        element: <Build />,
      },
    ],
  },
]);

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#275271", dark: "#275271" },
          secondary: {
            main: "#fff",
          },
          background: {
            default: "#f1f3f6",
            paper: "#ffffff",
            contrastText: "#333",
            light: "#fff",
          },
          typography: {
            fontFamily: `'Raleway', sans-serif;`,
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
          },
          components: {
            MuiCssBaseline: {
              styleOverrides: `
              @font-face {
                font-family: 'Dancing Script';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                 url(${DancingScript}) 
                 format('ttf');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, 
                  U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, 
                  U+2215, U+FEFF, U+FFFD;
              }
              `,
            },
            MuiTextField: {
              styleOverrides: {
                root: {
                  "&:has(> input:-webkit-autofill)": {
                    backgroundColor: "transparent",
                  },
                },
              },
            },
          },
        }
      : {
          primary: {
            main: "#e9c56a",
            dark: "#c4a24d",
          },
          background: {
            default: "#10101B",
            paper: "#191c2b",
          },
          typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            h4: {
              [`@media screen and (max-width: 600px)`]: {
                fontSize: "0.5rem",
              },
            },
          },
          components: {
            MuiCssBaseline: {
              styleOverrides: `
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                 url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap) 
                 format('ttf');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, 
                  U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, 
                  U+2215, U+FEFF, U+FFFD;
              }
              `,
            },
            MuiInputBase: {
              styleOverrides: {
                root: {
                  "&:has(> input:-webkit-autofill)": {
                    backgroundColor: "red",
                  },
                },
              },
            },
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
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <RouterProvider router={router} />
          </CssBaseline>
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>
);
