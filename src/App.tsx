import "./App.css";

import "./index.scss";
import BuildCard from "./components/BuildCard";
import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { getAllBuilds } from "./store/slices/buildSlice";
import GridWrapper from "./components/grid/GridWrapper";
import GridItem from "./components/grid/GridItem";
import BaseContainer from "./components/layout/BaseContainer";
import BaseGrid from "./components/layout/BaseGrid";
import BuildsPage from "./pages/BuildsPage";

function App() {
  const dispatch = useAppDispatch();
  const builds = useAppSelector((state) => state.builds.builds);

  useEffect(() => {
    dispatch(getAllBuilds());
  }, []);

  console.log(builds);

  return (
    <div style={{ marginTop: "80px" }}>
      <BuildsPage />
      {/* <BaseContainer> */}
      {/* <BaseGrid>
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
        </BaseGrid> */}
      {/* <GridWrapper spacing={3} justifyContent="center"> */}

      {/* </GridWrapper> */}
      {/* </BaseContainer> */}
    </div>
    // <Box  width={{xs: "95%", sm: "90%"}} margin="0 auto">

    // </Box>
  );
}

export default App;
