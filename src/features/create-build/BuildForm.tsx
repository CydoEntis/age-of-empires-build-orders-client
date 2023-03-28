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
} from "@mui/material";
import Box from "@mui/material/Box";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

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

function BuildForm({}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      p={10}
    >
      <Box component="form" width={3 / 5}>
        <Typography variant="h3">Create A New Build</Typography>
        <TextField
          margin="normal"
          fullWidth
          id="buildName"
          label="Build Name"
          name="buildName"
          variant="standard"
          autoFocus
          color="primary"
          sx={{ backgroundColor: "white" }}
          onChange={(e) => console.log(e.target.value)}
        />
        <TextField
          multiline
          maxRows={4}
          rows={4}
          margin="normal"
          fullWidth
          id="description"
          label="Description"
          name="description"
          variant="standard"
          autoFocus
          color="primary"
          sx={{ backgroundColor: "white" }}
          onChange={(e) => console.log(e.target.value)}
        />
        <TextField
          margin="normal"
          select
          fullWidth
          id="civilization"
          label="Select a Civilization"
          name="civilization"
          variant="standard"
          autoFocus
          color="primary"
          sx={{ backgroundColor: "white" }}
          onChange={(e) => console.log(e.target.value)}
        >
          {civilizations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="normal"
          select
          fullWidth
          id="difficulty"
          label="Select a Difficulty"
          name="difficulty"
          variant="standard"
          autoFocus
          color="primary"
          sx={{ backgroundColor: "white" }}
          onChange={(e) => console.log(e.target.value)}
        >
          {difficulties.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="normal"
          select
          fullWidth
          id="mapType"
          label="Select a Map Type"
          name="mapType"
          variant="standard"
          autoFocus
          color="primary"
          sx={{ backgroundColor: "white" }}
          onChange={(e) => console.log(e.target.value)}
        >
          {mapTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="normal"
          select
          fullWidth
          id="buildType"
          label="Select a Build Type"
          name="buildType"
          variant="standard"
          autoFocus
          color="primary"
          sx={{ backgroundColor: "white" }}
          onChange={(e) => console.log(e.target.value)}
        >
          {buildTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="normal"
          select
          fullWidth
          id="buildType"
          label="Select a Build Type"
          name="buildType"
          variant="standard"
          autoFocus
          color="primary"
          sx={{ backgroundColor: "white" }}
          onChange={(e) => console.log(e.target.value)}
        >
          {buildTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Typography variant="h6" mt={3}>
          Add A Step
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              <TableRow component="th" scope="row">
                <TableCell>Time</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Food</TableCell>
                <TableCell>Wood</TableCell>
                <TableCell>Gold</TableCell>
                <TableCell>Stone</TableCell>
              </TableRow>
              <TableRow component="th" scope="row">
                <TableCell>
                  <TimePicker label="Basic time picker" />

                </TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Food</TableCell>
                <TableCell>Wood</TableCell>
                <TableCell>Gold</TableCell>
                <TableCell>Stone</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create Build
        </Button>
      </Box>
    </Box>
  );
}

export default BuildForm;
