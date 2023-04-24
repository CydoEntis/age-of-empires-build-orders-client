import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { ZodType, z } from "zod";
import { Step } from "../../store/slices/buildSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";

const defaultStepValues: Step = {
  villagerCount: 0,
  instruction: "",
  food: 0,
  wood: 0,
  gold: 0,
  stone: 0,
};

type Props = {
  handleAddStep: () => void;
};

function BuildStep({ handleAddStep }: Props) {
  const [showAddButton, setShowAddButton] = useState(true);

  const stepSchema: ZodType<Step> = z.object({
    villagerCount: z.number().min(0).max(200).nonnegative(),
    instruction: z.string().min(10).max(50),
    food: z.number().min(0).max(200).nonnegative(),
    wood: z.number().min(0).max(200).nonnegative(),
    gold: z.number().min(0).max(200).nonnegative(),
    stone: z.number().min(0).max(200).nonnegative(),
  });

  const { handleSubmit, control } = useForm<Step>({
    defaultValues: defaultStepValues,
    resolver: zodResolver(stepSchema),
  });

  function submitForm(data: Step) {
    handleAddStep();
    // setShowAddButton(false);
    console.log("clicked");
    console.log(data);
  }

  return (
    <Box
      width={3 / 5}
      component={Paper}
      sx={{
        maxHeight: "1200px",
        borderRadius: ".8rem",
      }}
      my={2}
      p={5}
    >
      <form onSubmit={handleSubmit(submitForm)}>
        <Stack direction="row" gap={5}>
          <FormInput
            id="villagerCount"
            name="villagerCount"
            label="Villager Count"
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
          id="instruction"
          name="instruction"
          label="Instructions"
          control={control}
          type="text"
          variant="outlined"
        />
        {showAddButton && (
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
        )}
      </form>
    </Box>
  );
}

export default BuildStep;
