import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import BaseContainer from "../components/layout/BaseContainer";
import BuildFilter from "../features/builds/BuildFilter";
import Builds from "../features/builds/Builds";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useSearchParams } from "react-router-dom";
import { getMyBuilds } from "../store/slices/buildSlice";

type Props = {};

function MyBuildsPage({}: Props) {
  const dispatch = useAppDispatch();
  const builds = useAppSelector((state) => state.builds.builds);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get('username');
  useEffect(() => {
    dispatch(getMyBuilds(username!));
  }, []);

  return (
    <BaseContainer>
      <Grid container sx={{ margin: "0 auto" }}>
        <Builds builds={builds} />
        <BuildFilter />
      </Grid>
    </BaseContainer>
  );
}

export default MyBuildsPage;
