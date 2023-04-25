import { Box, Grid } from "@mui/material";
import React from "react";

type Props = { children: React.ReactNode };

function BaseContainer({ children }: Props) {
  return (
    <Box
      width={{ xs: "95%", sm: "95%", md: "90%", lg: "85%", xl: "50%" }}
      sx={{ margin: "0 auto" }}
    >
      {children}
    </Box>
  );
}

export default BaseContainer;
