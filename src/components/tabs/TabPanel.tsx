import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
    children: React.ReactNode;
    value: number;
    index: number;
};

function TabPanel( { children, value, index }: Props) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default TabPanel;
