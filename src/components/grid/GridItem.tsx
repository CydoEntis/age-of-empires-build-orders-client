import { Grid, Paper } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function GridItem({ children }: Props) {
  return (
    <Grid
      component={Paper}
      item
      mt="80px"
      xs={12}
      sm={12}
      md={10}
      lg={8}
      xl={8}
      p={5}
      borderRadius=".8rem"
    >
      {children}
    </Grid>
  );
}

export default GridItem;
