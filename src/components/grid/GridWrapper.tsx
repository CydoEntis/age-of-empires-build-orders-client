import { Box, Grid, Paper } from "@mui/material";
import React from "react";

type Props = {
  spacing: number;
  justifyContent?: string;
  children: React.ReactNode;
};

function GridWrapper({ spacing, justifyContent, children }: Props) {
  return (
    <Grid container my="80px" justifyContent={justifyContent} spacing={spacing}>
      {children}
    </Grid>
  );
}

export default GridWrapper;
