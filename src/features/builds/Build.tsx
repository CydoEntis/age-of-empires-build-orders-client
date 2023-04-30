import React from "react";
import { BuildWithSteps } from "../../store/slices/buildSlice";
import BuildCard from "../../components/card/BuildCard";
import GridItem from "../../components/grid/GridItem";
import Steps from "./Steps";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

type Props = {
  build: BuildWithSteps;
};

function Build({ build }: Props) {
  return (
    // <GridItem>
    <Box mt="80px">
      <Stack spacing={2}>
        {/* <BuildCard
          title={build.title}
          description={build.description}
          civilization={build.civilization}
          difficulty={build.difficulty}
          mapType={build.mapType}
          buildType={build.buildType}
          createdBy={build.createdBy}
        /> */}
        <Typography>{build.id}</Typography>
        <Box component={Paper} elevation={8} p={5} sx={{borderRadius: ".2rem"}}>
          <Steps steps={build.steps} isPreview={false}/>
        </Box>
      </Stack>
    </Box>
    // </GridItem>
  );
}

export default Build;
