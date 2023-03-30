import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  TableContainer,
} from "@mui/material";
import StepCard from "../components/StepCard";
import { makeStyles } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import BuildSteps from "../features/builds/BuildSteps";
type Props = {};



function Build({}: Props) {
  return (
    // <Grid container sx={{ justifyContent: "center", border: "3px solid lime", width: "100vw"}} columns={{ xs: 1, sm: 1, }}>
      <Container>
        <StepCard />
        <BuildSteps />
      </Container>  
      
      
  );
}

export default Build;
