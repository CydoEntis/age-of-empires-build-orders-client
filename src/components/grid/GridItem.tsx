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
      sm={11}
      md={10}
      lg={10}
      xl={8}
      px={{xs: 1, sm: 2, md: 5, lg: 5}}
      py={5}
      borderRadius=".8rem"
    >
      {children}
    </Grid>
  );
}

export default GridItem;
