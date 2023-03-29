import React from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import RegisterForm from "./RegisterForm";
import Box from "@mui/material/Box";
import AuthImage from "./AuthImage";

type Props = {
  children: React.ReactNode;
};

function AuthWrapper({ children }: Props) {
  return (
    <Grid
      container
      component="main"
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Grid item xs={6} sx={{ display: "flex" }}>
        {children}
      </Grid>
    </Grid>
  );
}

export default AuthWrapper;
