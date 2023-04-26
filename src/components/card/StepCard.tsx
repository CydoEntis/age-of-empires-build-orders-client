import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Paper,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import EnglishFlag from "../assets/english.png";
import React from "react";
import GridItem from "../grid/GridItem";
import BuildCard from "./BuildCard";
import { BuildWithSteps } from "../../store/slices/buildSlice";
import BuildSteps from "../../features/builds/BuildSteps";
import Steps from "../../features/builds/Steps";

type Props = {
  build: BuildWithSteps
};

function StepCard({build}: Props) {
  return (
    <GridItem>
      <BuildCard title={build.title} description={build.description} civilization={build.civilization} difficulty={build.difficulty} mapType={build.mapType} buildType={build.buildType} />
      <Steps steps={build.steps} />
    </GridItem>
  );
}

export default StepCard;
