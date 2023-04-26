import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

type Props = {};

function AuthImage({}: Props) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={8}
      xl={8}
      py={5}
      px={2}
      component={Paper}
      elevation={8}
      sx={{
        height: {lg: "750px"},
        display: {xs: "none", lg: "block"},
        background:
          "url(https://static.vecteezy.com/system/resources/previews/002/859/091/original/world-map-background-in-navy-blue-and-gold-free-vector.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Grid>
  );
}

export default AuthImage;
