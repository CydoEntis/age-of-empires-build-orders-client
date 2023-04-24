import { TableBody } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function StepTableBody({ children }: Props) {
  return <TableBody>{children}</TableBody>;
}

export default StepTableBody;
