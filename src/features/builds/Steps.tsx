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
import React, { useState } from "react";
import GridItem from "../../components/grid/GridItem";
import StepTableHead from "../../components/table/StepTableHead";
import StepTableBody from "../../components/table/StepTableBody";
import StepTableRow from "../../components/table/StepTableRow";
import { Step } from "../../store/slices/buildSlice";

type Props = {
  steps: Step[];
  deleteStep: (id: number | undefined) => void;
  isPreview?: boolean;
};


function Steps({ isPreview, steps, deleteStep }: Props) {
  console.log(steps);
  return (
    <TableContainer>
      <Table>
        <StepTableHead isPreview={isPreview} />
        <StepTableBody >
          {steps.map((step, index) => (
            <StepTableRow
              id={step.id ? step.id : index}
              key={step.id ? step.id : index}
              villagers={step.villagers}
              food={step.food}
              wood={step.wood}
              gold={step.gold}
              stone={step.stone}
              step={step.step}
              isPreview={isPreview}
              deleteStep={deleteStep}
            />
          ))}
        </StepTableBody>
      </Table>
    </TableContainer>
  );
}

export default Steps;
