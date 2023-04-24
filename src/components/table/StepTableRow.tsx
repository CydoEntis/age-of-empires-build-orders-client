import { TableRow } from "@mui/material";
import React from "react";
import StepTableCell from "./StepTableCell";

type Props = {
  id: number;
  villagers: number;
  food: number;
  wood: number;
  gold: number;
  stone: number;
  step: string;
};

function StepTableRow({ id, villagers, food, wood, gold, stone, step }: Props) {
  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <StepTableCell item={villagers} align="center" />
      <StepTableCell item={food} type={"food"} align="center" />
      <StepTableCell item={wood} type={"wood"} align="center" />
      <StepTableCell item={gold} type={"gold"} align="center" />
      <StepTableCell item={stone} type={"stone"} align="center" />
      <StepTableCell item={step} />
    </TableRow>
  );
}

export default StepTableRow;
