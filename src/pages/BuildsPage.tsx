import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import BaseContainer from "../components/layout/BaseContainer";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllBuilds } from "../store/slices/buildSlice";
import Builds from "../features/builds/Builds";
import BuildFilter from "../features/builds/BuildFilter";

type Props = {};

function BuildsPage({}: Props) {
  const dispatch = useAppDispatch();
  const builds = useAppSelector((state) => state.builds.builds);

  useEffect(() => {
    dispatch(getAllBuilds());
  }, []);

  return (
    <BaseContainer>
      <Grid container sx={{ margin: "0 auto" }}>
        <Builds builds={builds}/>
        <BuildFilter />
      </Grid>
    </BaseContainer>
  );
}

export default BuildsPage;
