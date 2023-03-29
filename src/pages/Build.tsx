import { Box, Grid, Paper, TableContainer } from "@mui/material";
import StepCard from "../components/StepCard";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
type Props = {};

function createData(
  id: number,
  time: string,
  food: number,
  wood: number,
  gold: number,
  stone: number,
  text: string
) {
  return { id, time, food, wood, gold, stone, text };
}

const rows = [
  createData(1, "00:00", 6, 0, 0, 0, "Select TC and make villagers"),
  createData(2, "00:00", 6, 0, 0, 0, "+6 Villagers to Sheep; rally to sheep"),
  createData(3, "00:20", 7, 0, 0, 0, "+1 Villager to Sheep; rally to gold"),
  createData(
    4,
    "00:40",
    7,
    0,
    0,
    1,
    "+1 Villager to Gold; Use this villager to build a house + mining camp"
  ),
  createData(5, "01:20", 7, 0, 0, 3, "	+2 Villagers to Gold; rally to wood"),
];

function Build({}: Props) {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <StepCard />

      <Grid item md={8} mt={3}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width="100px">Time</TableCell>
                <TableCell sx={{ backgroundColor: "#ff61615d" }} width="100px">
                  Food
                </TableCell>
                <TableCell sx={{ backgroundColor: "#ffc0615d" }} width="100px">
                  Wood
                </TableCell>
                <TableCell sx={{ backgroundColor: "#ffea2b77" }} width="100px">
                  Gold
                </TableCell>
                <TableCell sx={{ backgroundColor: "#fdedd65d" }} width="100px">
                  Stone
                </TableCell>
                <TableCell>Instruction</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.time}</TableCell>
                  <TableCell align="center" sx={{ backgroundColor: "#ff61615d" }}>
                    {row.food}
                  </TableCell>
                  <TableCell align="center" sx={{ backgroundColor: "#ffc0615d" }}>
                    {row.wood}
                  </TableCell>
                  <TableCell align="center" sx={{ backgroundColor: "#ffea2b77" }}>
                    {row.gold}
                  </TableCell>
                  <TableCell align="center" sx={{ backgroundColor: "#fdedd65d" }}>
                    {row.stone}
                  </TableCell>
                  <TableCell>{row.text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Build;
