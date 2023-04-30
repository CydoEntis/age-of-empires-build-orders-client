import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  TableContainer,
} from "@mui/material";
import StepCard from "../components/card/StepCard";
import { makeStyles } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import BuildSteps from "../features/builds/BuildSteps";
import BaseContainer from "../components/layout/BaseContainer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import Build from "../features/builds/Build";
import { getBuildById } from "../store/slices/buildSlice";
import { useParams } from "react-router-dom";
type Props = {};

function BuildPage({}: Props) {
  const dispatch = useAppDispatch();
  const build = useAppSelector((state) => state.builds.build);
  const { buildId } = useParams();
  useEffect(() => {
    dispatch(getBuildById(Number(buildId!)));
  }, []);
  return (
    <BaseContainer>
        {build && <Build build={build} />}
    </BaseContainer>
  );
}

export default BuildPage;
