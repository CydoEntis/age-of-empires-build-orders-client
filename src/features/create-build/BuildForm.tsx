import {
  Typography,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Stack,
  CssBaseline,
  Paper,
  Grid,
} from "@mui/material";
import Box from "@mui/material/Box";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useEffect, useState } from "react";
import BuildStep from "./BuildStep";

type Props = {};

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

interface IBuildStep {}

function BuildForm({}: Props) {
  const [steps, setSteps] = useState([<BuildStep stepNumber={1} key={0} />]);

  function handleAddStep() {
    setSteps(
      steps.concat(
        <BuildStep stepNumber={steps.length + 1} key={steps.length} />
      )
    );
  }

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [steps]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#F0F2F6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      p={10}
    >
      <Box
        component="form"
        width={3 / 5}
        sx={{
          background: "#FEFEFF",
          maxHeight: "1200px",
          borderRadius: ".8rem",
        }}
        p={5}
      >
        <Typography variant="h3">Create A New Build</Typography>
        <TextField
          margin="normal"
          fullWidth
          id="buildName"
          label="Build Name"
          name="buildName"
          variant="outlined"
          autoFocus
          onChange={(e) => console.log(e.target.value)}
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
          <TextField
            select
            defaultValue="ABBASID_DYNASTY"
            fullWidth
            id="civilization"
            label="Select a Civilization"
            name=""
            variant="outlined"
            autoFocus
            onChange={(e) => console.log(e.target.value)}
          >
            {civilizations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            defaultValue="EASY"
            fullWidth
            id="difficulty"
            label="Select a Difficulty"
            name="difficulty"
            variant="outlined"
            autoFocus
            onChange={(e) => console.log(e.target.value)}
          >
            {difficulties.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack
          direction="row"
          spacing={6}
          alignItems="center"
          justifyContent="center"
          py={3}
        >
          <TextField
            select
            defaultValue="OPEN"
            fullWidth
            id="mapType"
            label="Select a Map Type"
            name="mapType"
            variant="outlined"
            autoFocus
            onChange={(e) => console.log(e.target.value)}
          >
            {mapTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            defaultValue="TIMING_ATTACK"
            fullWidth
            id="buildType"
            label="Select a Build Type"
            name="buildType"
            variant="outlined"
            autoFocus
            onChange={(e) => console.log(e.target.value)}
          >
            {buildTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Typography variant="h6" mt={3}>
          Add A Step
        </Typography>
      </Box>
      <Stack spacing={2} width={3 / 5}>
        {steps}
      </Stack>
      <Box width={3 / 5}>
        <Button
          type="button"
          variant="contained"
          sx={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "block",
            mt: 1,
            mb: 1,
          }}
          onClick={handleAddStep}
        >
          Add a Step
        </Button>
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