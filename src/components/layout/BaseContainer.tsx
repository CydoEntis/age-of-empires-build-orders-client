import { Box, Grid } from "@mui/material";
import React from "react";

type Props = { children: React.ReactNode };

function BaseContainer({ children }: Props) {
  return (
    <Box
      width={{ xs: "100%", sm: "95%", md: "95%", lg: "95%", xl: "65%" }}
      sx={{ margin: "80px auto" }}
    >
      {children}
    </Box>
  );
}

export default BaseContainer;
