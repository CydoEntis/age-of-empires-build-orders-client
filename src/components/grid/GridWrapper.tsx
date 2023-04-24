import { Box, Grid, Paper } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function GridWrapper({ children }: Props) {
  return (
    <Grid container my={2} justifyContent="center">
      {children}
    </Grid>
  );
}

export default GridWrapper;
