import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

import Villager from "../../assets/villager.png";
import Food from "../../assets/food.png";
import Wood from "../../assets/wood.png";
import Gold from "../../assets/gold.png";
import Stone from "../../assets/stone.png";
import TableImage from "./TableImage";

type Props = {
  isPreview?: boolean;
};

function StepTableHead({ isPreview }: Props) {
  return (

    <TableHead >
      <TableRow>
        <TableCell sx={{ padding: 0, margin: 0, width: "60px",}} align="center">
          <TableImage src={Villager} />
        </TableCell>
        <TableCell align="center" sx={{ width: "60px",padding: 0, margin: 0, backgroundColor: "#ff61615d" }}>
          <TableImage src={Food} />
        </TableCell>
        <TableCell align="center" sx={{ width: "60px",padding: 0, margin: 0, backgroundColor: "#ffc0615d" }}>
          <TableImage src={Wood} />
        </TableCell>
        <TableCell align="center" sx={{ width: "60px",padding: 0, margin: 0, backgroundColor: "#ffea2b77" }}>
          <TableImage src={Gold} />
        </TableCell>
        <TableCell align="center" sx={{ width: "60px",padding: 0, margin: 0, backgroundColor: "#fdedd65d" }}>
          <TableImage src={Stone} />
        </TableCell>
        <TableCell>Step</TableCell>
        {isPreview && (
          <>
            <TableCell></TableCell>
          </>
        )}
      </TableRow>
    </TableHead>
  );
}

export default StepTableHead;
