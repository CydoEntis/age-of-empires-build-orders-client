import { Box, Button, Grid, Paper, Stack } from "@mui/material";
import React, { useEffect } from "react";
import BaseContainer from "../components/layout/BaseContainer";
import BuildCard from "../components/BuildCard";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { Build, getAllBuilds } from "../store/slices/buildSlice";
import FormInput from "../components/form/FormInput";
import FromDropdown from "../components/form/FormDropdown";
import {
  buildTypes,
  civilizations,
  difficulties,
  mapTypes,
} from "../data/buildData";
import { ZodType, z } from "zod";
import {
  buildTypeEnums,
  civilizationEnums,
  difficultyEnums,
  mapTypeEnums,
} from "../data/zodEnums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {};

interface Filter {
  civilization: "";
  difficulty: "";
  mapType: "";
  buildType: "";
}

const defaultValues: Filter = {
  civilization: "",
  difficulty: "",
  mapType: "",
  buildType: "",
};

function BuildsPage({}: Props) {
  const dispatch = useAppDispatch();
  const builds = useAppSelector((state) => state.builds.builds);

  const filterSchema: ZodType<Build> = z.object({
    title: z.string().min(5).max(20),
    description: z.string().min(10).max(50),
    civilization: z.enum(civilizationEnums),
    difficulty: z.enum(difficultyEnums),
    mapType: z.enum(mapTypeEnums),
    buildType: z.enum(buildTypeEnums),
  });

  const { handleSubmit, control, reset } = useForm<Filter>({
    defaultValues,
    resolver: zodResolver(filterSchema),
  });

  console.log(builds);

  useEffect(() => {
    dispatch(getAllBuilds());
  }, []);

  return (
    <BaseContainer>
      <Grid container sx={{ margin: "0 auto" }}>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8} py={5} px={2}>
          <Stack spacing={3}>
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
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} xl={4} py={5} px={2}>
          <Box
            elevation={8}
            component={Paper}
            sx={{ borderRadius: ".8rem" }}
            p={3}
          >
            <form>
              <Stack spacing={2}>
                <FromDropdown
                  name="civilization"
                  label="Civilization"
                  options={civilizations}
                  control={control}
                />
                <FromDropdown
                  name="mapType"
                  label="Map Type"
                  options={mapTypes}
                  control={control}
                />
                <FromDropdown
                  name="buildType"
                  label="Build Type"
                  options={buildTypes}
                  control={control}
                />
                <FromDropdown
                  name="difficulty"
                  label="Difficulty"
                  options={difficulties}
                  control={control}
                />
                <Button>Search</Button>
              </Stack>
            </form>
          </Box>
        </Grid>
      </Grid>
    </BaseContainer>
  );
}

export default BuildsPage;
