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
        background:
          "radial-gradient(circle, rgba(28,40,69,1) 25%, rgba(14,16,25,1) 64%, rgba(6,15,38,1) 96%)",
      }}
    >
      <Grid item xs={6} sx={{ display: "flex" }}>
        {children}
      </Grid>
      {/* <CssBaseline /> */}
    </Grid>
  );
}

export default AuthWrapper;
