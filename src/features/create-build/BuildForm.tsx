import { Typography, TextField, Stack, Button, Grid, Paper } from "@mui/material";
import { ZodType, z } from "zod";
import {
  Build,
  BuildWithSteps,
  Step,
  createBuild,
} from "../../store/slices/buildSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FromDropdown from "../../components/form/FormDropdown";
import FormInput from "../../components/form/FormInput";
import GridItem from "../../components/grid/GridItem";
import Steps from "../builds/Steps";
import {
  civilizations,
  difficulties,
  mapTypes,
  buildTypes,
} from "../../data/buildData";
import {
  buildTypeEnums,
  civilizationEnums,
  difficultyEnums,
  mapTypeEnums,
} from "../../data/zodEnums";
import StepForm from "./StepForm";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import FormTextArea from "../../components/form/FormTextArea";
import { useNavigate } from "react-router-dom";

const defaultBuildValues: Build = {
  title: "",
  description: "",
  civilization: "",
  difficulty: "",
  mapType: "",
  buildType: "",
};

function BuildForm() {
  const username = useAppSelector((state) => state.auth.username);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const buildSchema: ZodType<Build> = z.object({
    title: z.string().min(5).max(150),
    description: z.string().min(10).max(250),
    civilization: z.enum(civilizationEnums),
    difficulty: z.enum(difficultyEnums),
    mapType: z.enum(mapTypeEnums),
    buildType: z.enum(buildTypeEnums),
  });

  const { handleSubmit, control, reset } = useForm<Build>({
    defaultValues: defaultBuildValues,
    resolver: zodResolver(buildSchema),
  });

  const [steps, setSteps] = useState<Step[]>([]);

  function handleSteps(data: Step) {
    setSteps((prevSteps) => [...prevSteps, data]);
  }
  console.log(username);

  function onSubmit(data: Build) {
    console.log("click");
    console.log(data);
    console.log(steps);
    const newBuild: BuildWithSteps = {
      ...data,
      createdBy: username,
      createdDate: new Date(),
      steps: steps,
    };
    console.log(newBuild);
    dispatch(createBuild(newBuild));
    reset();
    navigate("/");
  }

  return (
    <Grid container sx={{ margin: "0 auto" }} spacing={3}>
      <Grid m={2} component={Paper} elevation={8} item xs={12} sm={12} md={12} lg={5} xl={5} py={5} px={2} sx={{borderRadius: ".4rem"}}>
        <Typography variant="h3">Create A New Build</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            id="title"
            name="title"
            label="Build Name"
            control={control}
            type="text"
            variant="filled"
          />
          <FormTextArea
            name="description"
            label="Description"
            control={control}
            variant="filled"
          />

          <Stack
            direction={{ sm: "column", md: "column", lg: "row" }}
            spacing={6}
            gap={2}
            alignItems="center"
            justifyContent="center"
            py={3}
          >
            <FromDropdown
              name="civilization"
              control={control}
              label="Select a Civilization"
              options={civilizations}
            />
            <FromDropdown
              name="difficulty"
              control={control}
              label="Select a Difficulty"
              options={difficulties}
            />
          </Stack>
          <Stack
            direction={{ sm: "column", md: "column", lg: "row" }}
            spacing={6}
            gap={2}
            alignItems="center"
            justifyContent="center"
            py={3}
          >
            <FromDropdown
              name="mapType"
              control={control}
              label="Select a Map Type"
              options={mapTypes}
            />
            <FromDropdown
              name="buildType"
              control={control}
              label="Select a Build Type"
              options={buildTypes}
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
            Create Build
          </Button>
        </form>
        <StepForm handleSteps={handleSteps} />
      </Grid>
      <Grid m={2} component={Paper} elevation={8} item xs={12} sm={12} lg={6} xl={6} py={5} px={2} sx={{borderRadius: ".4rem"}}>
        <Steps steps={steps} isPreview />
      </Grid>
    </Grid>
  );
}

export default BuildForm;
