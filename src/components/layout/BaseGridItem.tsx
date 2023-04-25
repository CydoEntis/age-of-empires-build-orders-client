import { Grid } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function BaseGridItem({ children }: Props) {
  return <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>{children}</Grid>;
}

export default BaseGridItem;
