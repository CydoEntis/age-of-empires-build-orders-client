import {
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Time from "../../assets/time.png"
import Food from "../../assets/food.png"
import Wood from "../../assets/wood.png"
import Gold from "../../assets/gold.png"
import Stone from "../../assets/stone.png"
import React from "react";
import CustomTableCell from "../../components/CustomTableCell";

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

function BuildSteps({}: Props) {
  return (
    <Grid item sm={12} md={10} lg={8} mt={3}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" >
              <img src={Time}/>
              </TableCell>
              <TableCell align="center" sx={{ backgroundColor: "#ff61615d" }}>
                <img src={Food}/>
              </TableCell>
              <TableCell align="center" sx={{ backgroundColor: "#ffc0615d" }}>
              <img src={Wood}/>
              </TableCell>
              <TableCell align="center" sx={{ backgroundColor: "#ffea2b77" }}>
              <img src={Gold}/>
              </TableCell>
              <TableCell align="center" sx={{ backgroundColor: "#fdedd65d" }}>
              <img src={Stone}/>
              </TableCell>
              <TableCell>Step</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <CustomTableCell item={row.time} />
                <CustomTableCell item={row.food}  type={"food"} align="center"/>
                <CustomTableCell item={row.wood}  type={"wood"} align="center"/>
                <CustomTableCell item={row.gold}  type={"gold"} align="center"/>
                <CustomTableCell item={row.stone} type={"stone"} align="center"/>
                <CustomTableCell item={row.text}/>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default BuildSteps;
