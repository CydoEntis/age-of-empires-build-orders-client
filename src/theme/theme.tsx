import { PaletteMode, createTheme } from "@mui/material";

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
        }
      : {
          primary: {
            main: "#e9c56a",
            dark: "#c4a24d",
          },
          background: {
            // default: "#10101B",
            // paper: "#191c2b",
            default: "#080B16",
            paper: "#000519",
            secondary: "#000519",
          },
        }),
  },
});

export const theme = createTheme(getDesignTokens("dark"));
