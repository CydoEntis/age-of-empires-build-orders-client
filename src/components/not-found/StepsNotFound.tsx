import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { TbMoodEmpty } from "react-icons/tb";

type Props = {};

function StepsNotFound({}: Props) {
  return (
    <Box>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <TbMoodEmpty  fontSize="5rem"/>
        <Typography variant="h5" textAlign="center">
          Uh oh! Your villagers can't find any steps to follow.
        </Typography>
        <Typography variant="h6" textAlign="center">
          Please add some before we lose our match.
        </Typography>
      </Stack>
    </Box>
  );
}

export default StepsNotFound;
