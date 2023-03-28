import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";
import React from "react";

type Props = {
    stepNumber: number;
};

function BuildStep({stepNumber}: Props) {
  return (
    <Box p={2} sx={{border: "1px solid lightgrey", borderRadius: ".4rem"}}>
        <Typography variant="h6" color={"white"}>Step {stepNumber}</Typography>
      <Stack direction="row" spacing={5} py={2}>
        <MobileTimePicker
          label={"Minutes : Seconds"}
          views={["minutes", "seconds"]}
          format="mm:ss"
          sx={{
            backgroundColor: "#232A3D",
            border: "2px solid grey",
            borderRadius: ".4rem",
            color: "white",
            input: { color: "white" },
            label: { color: "white" },
          }}
        />
        <TextField
          fullWidth
          id="instruction"
          label="Instruction"
          name="instruction"
          variant="outlined"
          autoFocus
          InputLabelProps={{ style: { color: "white" } }}
          sx={{
            backgroundColor: "#232A3D",
            border: "2px solid grey",
            borderRadius: ".4rem",
            color: "white",
            input: { color: "white" },
            label: { color: "white" },
          }}
          onChange={(e) => console.log(e.target.value)}
        />
      </Stack>
      <Stack direction="row" spacing={2} py={2} justifyContent="space-between">
        <TextField
          id="food"
          label="Villagers to Food"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          sx={{
            backgroundColor: "#232A3D",
            border: "2px solid grey",
            borderRadius: ".4rem",
            color: "white",
            input: { color: "white" },
            label: { color: "white" },
          }}
          onChange={(e) => console.log(e.target.value)}
        />
        <TextField
          id="wood"
          label="Villagers to Wood"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          sx={{
            backgroundColor: "#232A3D",
            border: "2px solid grey",
            borderRadius: ".4rem",
            color: "white",
            input: { color: "white" },
            label: { color: "white" },
          }}
          onChange={(e) => console.log(e.target.value)}
        />
        <TextField
          id="gold"
          label="Villagers to Gold"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          sx={{
            backgroundColor: "#232A3D",
            border: "2px solid grey",
            borderRadius: ".4rem",
            color: "white",
            input: { color: "white" },
            label: { color: "white" },
          }}
          onChange={(e) => console.log(e.target.value)}
        />
        <TextField
          id="stone"
          label="Villagers to Stone"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          sx={{
            backgroundColor: "#232A3D",
            border: "2px solid grey",
            borderRadius: ".4rem",
            color: "white",
            input: { color: "white" },
            label: { color: "white" },
          }}
          onChange={(e) => console.log(e.target.value)}
        />
      </Stack>
    </Box>
  );
}

export default BuildStep;
