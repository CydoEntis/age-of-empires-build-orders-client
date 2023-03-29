import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";
import React from "react";

type Props = {
  stepNumber: number;
};

function BuildStep({ stepNumber }: Props) {
  return (
    <Box
      width={3 / 5}
      component={Paper}
      sx={{
        // background: "#FEFEFF",
        maxHeight: "1200px",
        borderRadius: ".8rem",
      }}
      my={2}
      p={5}
    >
      <Typography variant="h6">Step {stepNumber}</Typography>
      <Stack direction="row" spacing={5} py={2}>
        <MobileTimePicker
          label={"Minutes : Seconds"}
          views={["minutes", "seconds"]}
          format="mm:ss"
          sx={{}}
        />
        <TextField
          fullWidth
          id="instruction"
          label="Instruction"
          name="instruction"
          variant="outlined"
          autoFocus
          sx={{}}
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
          sx={{}}
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
          sx={{}}
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
          sx={{}}
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
          sx={{}}
          onChange={(e) => console.log(e.target.value)}
        />
      </Stack>
    </Box>
  );
}

export default BuildStep;
