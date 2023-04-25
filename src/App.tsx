import "./App.css";

import "./index.scss";
import BuildCard from "./components/BuildCard";
import { Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { getAllBuilds } from "./store/slices/buildSlice";

function App() {
  const dispatch = useAppDispatch();
  const builds = useAppSelector((state) => state.builds.builds);

  useEffect(() => {
    dispatch(getAllBuilds());
  }, []);

  console.log(builds);

  return (
    <Box
      sx={{
        padding: "5rem",
        paddingTop: "7rem",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={2}>
        {builds &&
          builds.map((build) => (
            <BuildCard
              key={build.id}
              title={build.title}
              description={build.description}
              civilization={build.civilization}
              difficulty={build.difficulty}
              mapType={build.mapType}
              buildType={build.buildType}
              createdBy={build.createdBy}
            />
          ))}
      </Grid>
    </Box>
  );
}

export default App;
