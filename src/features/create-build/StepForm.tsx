import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { ZodType, z } from "zod";
import { Step } from "../../store/slices/buildSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import GridItem from "../../components/grid/GridItem";
import { v4 as uuidv4 } from "uuid";

type Props = {
  addStep: (data: Step) => void;
};

let tempiId = 0;

const defaultStepValues: Step = {
  villagers: 0,
  step: "",
  food: 0,
  wood: 0,
  gold: 0,
  stone: 0,
};

function StepForm({ addStep }: Props) {
  const stepSchema: ZodType<Step> = z.object({
    villagers: z.number().min(0).max(200).nonnegative(),
    step: z
      .string()
      .min(10, "Step must be longer than 10 characters.")
      .max(250),
    food: z.number().min(0).max(200).nonnegative(),
    wood: z.number().min(0).max(200).nonnegative(),
    gold: z.number().min(0).max(200).nonnegative(),
    stone: z.number().min(0).max(200).nonnegative(),
  });

  const { handleSubmit, control, reset } = useForm<Step>({
    defaultValues: defaultStepValues,
    resolver: zodResolver(stepSchema),
  });

  function submitForm(data: Step) {
    addStep({
      ...data,
      id: tempId++,
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Typography variant="h6" mt={3}>
        Add A Step
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} gap={5}>
        <Box sx={{ width: "400px" }}>
          <FormInput
            id="villagers"
            name="villagers"
            label="Villagers"
            control={control}
            type="number"
            variant="filled"
          />
        </Box>
        <Box sx={{ width: "400px" }}>
          <FormInput
            id="food"
            name="food"
            label="Food"
            control={control}
            type="number"
            variant="filled"
          />
        </Box>
        <Box sx={{ width: "400px" }}>
          <FormInput
            id="wood"
            name="wood"
            label="Wood"
            control={control}
            type="number"
            variant="filled"
          />
        </Box>
        <Box sx={{ width: "400px" }}>
          <FormInput
            id="gold"
            name="gold"
            label="Gold"
            control={control}
            type="number"
            variant="filled"
          />
        </Box>
        <Box sx={{ width: "400px" }}>
          <FormInput
            id="stone"
            name="stone"
            label="Stone"
            control={control}
            type="number"
            variant="filled"
          />
        </Box>
        <FormInput
          id="step"
          name="step"
          label="Step"
          control={control}
          type="text"
          variant="filled"
        />
      </Stack>

      <Button
        type="submit"
        variant="contained"
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "block",
          mt: 1,
          mb: 1,
        }}
      >
        Add a Step
      </Button>
    </form>
  );
}

export default StepForm;
