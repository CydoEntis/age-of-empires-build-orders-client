import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

import Villager from "../../assets/villager.png";
import Food from "../../assets/food.png";
import Wood from "../../assets/wood.png";
import Gold from "../../assets/gold.png";
import Stone from "../../assets/stone.png";

type Props = {};

function StepTableHead({}: Props) {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">
          <img src={Villager} />
        </TableCell>
        <TableCell align="center" sx={{ backgroundColor: "#ff61615d" }}>
          <img src={Food} />
        </TableCell>
        <TableCell align="center" sx={{ backgroundColor: "#ffc0615d" }}>
          <img src={Wood} />
        </TableCell>
        <TableCell align="center" sx={{ backgroundColor: "#ffea2b77" }}>
          <img src={Gold} />
        </TableCell>
        <TableCell align="center" sx={{ backgroundColor: "#fdedd65d" }}>
          <img src={Stone} />
        </TableCell>
        <TableCell>Step</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default StepTableHead;
