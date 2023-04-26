import { Grid, Box, Paper, Stack, Button } from "@mui/material";
import FromDropdown from "../../components/form/FormDropdown";
import {
  civilizations,
  mapTypes,
  buildTypes,
  difficulties,
} from "../../data/buildData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import {
  civilizationEnums,
  difficultyEnums,
  mapTypeEnums,
  buildTypeEnums,
} from "../../data/zodEnums";
import { Build } from "../../store/slices/buildSlice";

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

function BuildFilter() {
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

  return (
    <Grid item xs={12} sm={12} lg={4} xl={4} py={5} px={2} order={{xs: 1, sm: 1, md: 1, lg: 2}}>
      <Box elevation={8} component={Paper} sx={{ borderRadius: ".2rem" }} p={3}>
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
  );
}

export default BuildFilter;
