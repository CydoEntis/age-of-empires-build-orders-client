import { Grid, Stack } from "@mui/material";
import React from "react";
import { Build } from "../../store/slices/buildSlice";
import BuildCard from "../../components/BuildCard";

type Props = {
    builds: Build[];
};

function Builds({builds}: Props) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={8} xl={8} py={5} px={2} >
      <Stack spacing={3}>
        {builds &&
          builds.map((build) => (
            <BuildCard
              key={build.id}
              id={build.id}
              title={build.title}
              description={build.description}
              civilization={build.civilization}
              difficulty={build.difficulty}
              mapType={build.mapType}
              buildType={build.buildType}
              createdBy={build.createdBy}
            />
          ))}
      </Stack>
    </Grid>
  );
}

export default Builds;
