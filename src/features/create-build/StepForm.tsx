import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { ZodType, z } from "zod";
import { Step } from "../../store/slices/buildSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import GridItem from "../../components/grid/GridItem";

type Props = {
  handleSteps: (data: Step) => void;
};

const defaultStepValues: Step = {
  villagers: 0,
  step: "",
  food: 0,
  wood: 0,
  gold: 0,
  stone: 0,
};

function StepForm({ handleSteps }: Props) {
  const stepSchema: ZodType<Step> = z.object({
    villagers: z.number().min(0).max(200).nonnegative(),
    step: z.string().min(10, "Step must be longer than 10 characters.").max(250),
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
    handleSteps(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Stack direction="row" gap={5}>
        <FormInput
          id="villagers"
          name="villagers"
          label="Villagers"
          control={control}
          type="number"
          variant="outlined"
        />
        <FormInput
          id="food"
          name="food"
          label="Food"
          control={control}
          type="number"
          variant="outlined"
        />
        <FormInput
          id="wood"
          name="wood"
          label="Wood"
          control={control}
          type="number"
          variant="outlined"
        />
        <FormInput
          id="gold"
          name="gold"
          label="Gold"
          control={control}
          type="number"
          variant="outlined"
        />
        <FormInput
          id="stone"
          name="stone"
          label="Stone"
          control={control}
          type="number"
          variant="outlined"
        />
      </Stack>
      <FormInput
        id="step"
        name="step"
        label="Step"
        control={control}
        type="text"
        variant="outlined"
      />
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