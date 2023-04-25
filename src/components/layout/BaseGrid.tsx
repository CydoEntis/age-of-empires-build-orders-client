import { Grid } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function BaseGrid({ children }: Props) {
  return <Grid container spacing={2} mt={2}>{children}</Grid>;
}

export default BaseGrid;
