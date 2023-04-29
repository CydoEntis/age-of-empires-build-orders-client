import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Box,
  Button,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import StepTableHead from "../../components/table/StepTableHead";
import StepTableBody from "../../components/table/StepTableBody";
import StepTableRow from "../../components/table/StepTableRow";
import { Step } from "../../store/slices/buildSlice";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";

type Props = {
  steps: Step[];
  deleteStep: (id: number | string) => void;
  isPreview?: boolean;
};

function Steps({ isPreview, steps, deleteStep }: Props) {
  const apiRef = useGridApiRef();

  const columns = [
    { field: "villagers", headerName: "Villagers", editable: false },
    { field: "food", headerName: "Food", editable: true },
    { field: "wood", headerName: "Wood", editable: true },
    { field: "gold", headerName: "Gold", editable: true },
    { field: "stone", headerName: "Stone", editable: true },
    { field: "step", headerName: "Step", editable: true },
  ];

  const rows = [
    {
      id: 1,
      villagers: 6,
      food: 6,
      wood: 0,
      gold: 0,
      stone: 0,
      step: "Rally all to food.",
    },
    {
      id: 2,
      villagers: 7,
      food: 6,
      wood: 0,
      gold: 1,
      stone: 0,
      step: "Gold vil build house then mine, then to gold.",
    },
  ];

  function calcTotalVils() {
    return rows.forEach(row => {
      let total = 0;
      total += row.food;
      total += row.wood;
      total += row.gold;
      total += row.stone;
      console.log(total);
      return total;
    })


  }

  let idCounter = 2;
  const createRow = () => {
    idCounter ++;
    return {
      id: idCounter,
      villagers: calcTotalVils(),
      food: 0,
      wood: 0,
      gold: 0,
      stone: 0,
      step: "",
    };
  };

  const handleAddRow = () => {
    apiRef.current.updateRows([createRow()]);
  };

  return (
    <TableContainer>
      <Table>
        <StepTableHead isPreview={isPreview} />
        <StepTableBody>
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
    // <Box sx={{ width: "100%" }}>
    //   <Stack direction="row" spacing={1}>
    //     {/* <Button size="small" onClick={handleDeleteRow}>
    //       Delete a row
    //     </Button> */}
    //     <Button size="small" onClick={handleAddRow}>
    //       Add a row
    //     </Button>
    //   </Stack>
    //   <Box sx={{ height: 400, mt: 1 }}>
    //     <DataGrid apiRef={apiRef} rows={rows} columns={columns} />
    //   </Box>
    // </Box>
  );
}

export default Steps;
