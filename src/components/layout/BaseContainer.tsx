import { Box, Grid } from "@mui/material";
import React from "react";

type Props = { children: React.ReactNode };

function BaseContainer({ children }: Props) {
  return (
    <Box
      width={{ xs: "100%", sm: "95%", md: "90%", lg: "85%", xl: "65%" }}
      sx={{ margin: "120px auto" }}
    >
      {children}
    </Box>
  );
}

export default BaseContainer;
