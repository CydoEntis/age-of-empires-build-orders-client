import {
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import BuildStep from "./BuildStep";
import { ZodType, z } from "zod";
import { Build, BuildWithSteps, Step } from "../../store/slices/buildSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FromDropdown from "../../components/form/FormDropdown";
import FormInput from "../../components/form/FormInput";

type Props = {};

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export enum Civilization {
  ABBASID_DYNASTY = "ABBASID_DYNASTY",
  CHINESE = "CHINESE",
  DELHI_SULTANTATE = "DELHI_SULTANTE",
  ENGLISH = "ENGLISH",
  FRENCH = "FRENCH",
  HOLY_ROMAN_EMPIRE = "HOLY_ROMAN_EMPIRE",
  MALIANS = "MALIANS",
  MONGOLS = "MONGOLS",
  OTTOMAS = "OTTOMANS",
  RUS = "RUS",
}

export enum MapType {
  OPEN = "OPEN",
  CLOSE = "CLOSED",
  HYBRID = "HYBRID",
  WATER = "WATER",
}

export enum BuildType {
  CHEESE = "CHEESE",
  DEFENSIVE = "DEFENSIVE",
  ECONOMIC = "ECONOMIC",
  FAST_CASTLE = "FAST_CASTLE",
  TIMING_ATTACK = "TIMING_ATTACK",
}


const civilizationEnums = ["ABBASID_DYNASTY", "CHINESE", "DELHI_SULTANTE", "ENGLISH", "FRENCH", "HOLY_ROMAN_EMPIRE", "MALIANS", "OTTOMANS","RUS"] as const;
const difficultyEnums = ["EASY", "MEDIUM", "HARD"] as const;
const mapTypeEnums = ["OPEN", "CLOSED", "HYBRID", "WATER",] as const;
const buildTypeEnums = ["CHEESE", "DEFENSIVE", "ECONOMIC", "FAST_CASTLE", "TIMING_ATTACK"] as const;

const civilizations = [
  {
    value: "ABBASID_DYNASTY",
    label: "Abbasid Dynasty",
  },
  {
    value: "CHINESE",
    label: "Chinese",
  },
  {
    value: "DELHI_SULTANTE",
    label: "Delhi Sultanate",
  },
  {
    value: "ENGLISH",
    label: "English",
  },
  {
    value: "FRENCH",
    label: "French",
  },
  {
    value: "HOLY_ROMAN_EMPIRE",
    label: "Holy Roman Empire",
  },
  {
    value: "MALIANS",
    label: "Malians",
  },
  {
    value: "MONGOLS",
    label: "Mongols",
  },
  {
    value: "OTTOMANS",
    label: "Ottomans",
  },
  {
    value: "RUS",
    label: "Rus",
  },
];

const difficulties = [
  {
    value: "EASY",
    label: "Easy",
  },
  {
    value: "MEDIUM",
    label: "Medium",
  },
  {
    value: "HARD",
    label: "Hard",
  },
];

const mapTypes = [
  {
    value: "OPEN",
    label: "Open",
  },
  {
    value: "CLOSED",
    label: "Closed",
  },
  {
    value: "HYBRID",
    label: "Hybrid",
  },
  {
    value: "WATER",
    label: "Water",
  },
];

const buildTypes = [
  {
    value: "TIMING_ATTACK",
    label: "Timing Attack",
  },
  {
    value: "CHEESE",
    label: "Cheese",
  },
  {
    value: "ECONOMIC",
    label: "Economic",
  },
  {
    value: "DEFENSIVE",
    label: "Defensive",
  },
  {
    value: "FAST_CASTLE",
    label: "Fast Castle",
  },
];

const defaultBuildValues: BuildWithSteps = {
  name: "",
  description: "",
  civilization: null,
  difficulty: null,
  mapType: null,
  buildType: null,
  createdBy: "",
  createdAt: "",
  updatedAt: "",
  steps: [],
};

function BuildForm({}: Props) {
  const [steps, setSteps] = useState([<BuildStep key={0} />]);

  function handleAddStep() {
    setSteps(steps.concat(<BuildStep key={steps.length} />));
  }

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

  const { handleSubmit, control } =
    useForm<BuildWithSteps>({
      defaultValues: defaultBuildValues,
      resolver: zodResolver(buildSchema),
    });

  function onSubmit(data: Build) {
    // dispatch(registerUser(data));
  }

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [steps]);

  // TODO: Move out add step into seperate component
  // TODO: Validate step on adding of new step.
  // TODO: Add remove button to each step

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      p={10}
    >
      <Box
        component={Paper}
        width={3 / 5}
        sx={{
          backgroundColor: "secondary",
          maxHeight: "1200px",
          borderRadius: ".8rem",
        }}
        p={5}
      >
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
        <Typography variant="h6" mt={3}>
          Add A Step
        </Typography>
      </Box>
      {steps}
      <Box width={3 / 5}>
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
      </Box>
    </Box>
  );
}

export default BuildForm;
