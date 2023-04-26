import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { store } from "./store/store";
import { Provider } from "react-redux";

import { router } from "./router/router";
import { theme } from "./theme/theme";

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
