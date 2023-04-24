import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
} from "@mui/material";
import React from "react";
import GridItem from "../../components/grid/GridItem";
import StepTableHead from "../../components/table/StepTableHead";
import StepTableBody from "../../components/table/StepTableBody";
import StepTableRow from "../../components/table/StepTableRow";

type Props = {};

function createData(
  id: number,
  villagers: number,
  food: number,
  wood: number,
  gold: number,
  stone: number,
  step: string
) {
  return { id, villagers, food, wood, gold, stone, step };
}

const steps = [
  createData(1, 6, 6, 0, 0, 0, "Select TC and make villagers"),
  createData(2, 8, 6, 0, 0, 0, "+6 Villagers to Sheep; rally to sheep"),
  createData(3, 10, 7, 0, 0, 0, "+1 Villager to Sheep; rally to gold"),
  createData(
    4,
    12,
    7,
    0,
    0,
    1,
    "+1 Villager to Gold; Use this villager to build a house + mining camp"
  ),
  createData(5, 14, 7, 0, 0, 3, "	+2 Villagers to Gold; rally to wood"),
];

function Steps({}: Props) {
  return (
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <StepTableHead />
        <StepTableBody>
          {steps.map((step) => (
            <StepTableRow
              id={step.id}
              villagers={step.villagers}
              food={step.food}
              wood={step.wood}
              gold={step.gold}
              stone={step.stone}
              step={step.step}
            />
          ))}
        </StepTableBody>
      </Table>
  );
}

export default Steps;
