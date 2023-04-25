import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import StepTableCell from "./StepTableCell";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { BsFillTrashFill } from "react-icons/bs";

type Props = {
  villagers: number;
  food: number;
  wood: number;
  gold: number;
  stone: number;
  step: string;
  isPreview?: boolean;
};

function StepTableRow({
  villagers,
  food,
  wood,
  gold,
  stone,
  step,
  isPreview,
}: Props) {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <StepTableCell item={villagers} align="center" />
      <StepTableCell item={food} type={"food"} align="center" />
      <StepTableCell item={wood} type={"wood"} align="center" />
      <StepTableCell item={gold} type={"gold"} align="center" />
      <StepTableCell item={stone} type={"stone"} align="center" />
      <StepTableCell item={step}  />
      {isPreview && (
        <TableCell>
            <BsFillTrashFill fontSize="1.5rem" color="#ff6161"/>
        </TableCell>
      )}
    </TableRow>
  );
}

export default StepTableRow;
