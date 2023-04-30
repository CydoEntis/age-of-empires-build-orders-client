import { Box, Grid, Paper } from "@mui/material";
import React from "react";

type Props = {
  spacing: number;
  justifyContent?: string;
  children: React.ReactNode;
};

function GridWrapper({ spacing, justifyContent, children }: Props) {
  return (
    <Grid
      mb={{ xs: 2, sm: 2, md: 3, lg: 0 }}
      mr={{ lg: 3 }}
      component={Paper}
      elevation={8}
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      p={3}
      sx={{ borderRadius: ".4rem" }}
    >
      {children}
    </Grid>
  );
}

export default GridWrapper;
