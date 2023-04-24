import { Typography, TextField, Stack } from "@mui/material";
import { ZodType, z } from "zod";
import { Build, BuildWithSteps } from "../../store/slices/buildSlice";
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
import BuildStep from "./BuildStep";

const defaultBuildValues: BuildWithSteps = {
  name: "",
  description: "",
  civilization: "",
  difficulty: "",
  mapType: "",
  buildType: "",
  createdBy: "",
  createdAt: "",
  updatedAt: "",
  steps: [],
};

function BuildForm() {
  const buildSchema: ZodType<Build> = z.object({
    name: z.string().min(5).max(20),
    description: z.string().min(10).max(50),
    civilization: z.enum(civilizationEnums),
    difficulty: z.enum(difficultyEnums),
    mapType: z.enum(mapTypeEnums),
    buildType: z.enum(buildTypeEnums),
    createdBy: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  });

  const { handleSubmit, control } = useForm<BuildWithSteps>({
    defaultValues: defaultBuildValues,
    resolver: zodResolver(buildSchema),
  });

  function onSubmit(data: Build) {
    // dispatch(registerUser(data));
  }

  return (
    <>
      <GridItem>
        <Typography variant="h3">Create A New Build</Typography>
        <FormInput
          id="buildName"
          name="name"
          label="Build Name"
          control={control}
          type="text"
          variant="outlined"
        />

        <TextField
          multiline
          rows={4}
          margin="normal"
          fullWidth
          id="description"
          label="Description"
          name="description"
          variant="outlined"
          onChange={(e) => console.log(e.target.value)}
        />
        <Stack
          direction="row"
          spacing={6}
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
          direction="row"
          spacing={6}
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
        <Steps />
        <Typography variant="h6" mt={3}>
          Add A Step
        </Typography>
        <BuildStep />
      </GridItem>
    </>
  );
}

export default BuildForm;
