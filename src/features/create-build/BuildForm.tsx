import {
  Typography,
  TextField,
  Stack,
  Button,
  Grid,
  Paper,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { ZodType, z } from "zod";
import {
  Build,
  BuildWithSteps,
  Step,
  createBuild,
  deleteStep,
  editBuild,
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import StepsNotFound from "../../components/not-found/StepsNotFound";
import TabController from "../../components/tabs/TabController";
import TabPanel from "../../components/tabs/TabPanel";

type Props = {
  build?: BuildWithSteps;
  edit?: boolean;
};

function BuildForm({ build, edit }: Props) {
  const username = useAppSelector((state) => state.auth.username);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { buildId } = useParams();

  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [steps, setSteps] = useState<Step[]>(edit ? build!.steps : []);
  let defaultBuildValues: Build;
  if (edit) {
    defaultBuildValues = {
      title: build!.title,
      description: build!.description,
      civilization: build!.civilization,
      difficulty: build!.difficulty,
      mapType: build!.mapType,
      buildType: build!.buildType,
    };
    // console.log(build!.steps);
    // setSteps(build!.steps);
  } else {
    defaultBuildValues = {
      title: "",
      description: "",
      civilization: "",
      difficulty: "",
      mapType: "",
      buildType: "",
    };
  }

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

  function addStep(data: Step) {
    setSteps((prevSteps) => [...prevSteps, data]);
  }

  function removeStep(id: number | string) {
    if (edit) {
      dispatch(deleteStep(id));
      const updatedSteps = steps.filter((step) => step.id !== id);
      setSteps(updatedSteps);
    } else {
      const updatedSteps = steps.filter((step) => step.id !== id);
      setSteps(updatedSteps);
    }
  }

  function onSubmit(data: Build) {
    const build: BuildWithSteps = {
      ...data,
      createdBy: username,
      createdDate: new Date(),
      steps: steps,
    };
    if (edit) {
      build.id = Number(buildId);
      console.log(build);
      dispatch(editBuild(build));
    } else {
      dispatch(createBuild(build));
    }
    reset();
    navigate("/");
  }

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid
        mb={{ xs: 2, sm: 2, md: 3, lg: 0 }}
        mr={{ lg: 3 }}
        component={Paper}
        elevation={8}
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        p={3}
        sx={{ borderRadius: ".4rem" }}
      >
        <Typography variant="h3">
          {value === 0 && "Create A New Build"}
        </Typography>
        <Typography variant="h3">{value === 1 && "Add A Step"}</Typography>
        <TabController value={value} onChange={handleTabChange}>
          <TabPanel value={value} index={0}>
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
                {edit ? "Update Build" : "Create Build"}
              </Button>
            </form>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <StepForm addStep={addStep} />

            {/* <Grid
              // m={2}
              component={Paper}
              elevation={8}
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              py={5}
              px={2}
              sx={{ borderRadius: ".4rem" }}
            > */}
              {steps.length > 0 && (
                <Steps steps={steps} deleteStep={removeStep} isPreview />
              )}
              {steps.length <= 0 && <StepsNotFound />}
            {/* </Grid> */}
          </TabPanel>
        </TabController>
      </Grid>
    </Grid>
  );
}

export default BuildForm;
