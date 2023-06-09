import { Chip } from "@mui/material";
import React from "react";

type Props = {
  text: string | undefined | null;
};

function Tag({ text }: Props) {
  return (
    <Chip
      label={text}
      sx={{ margin: "3px", borderRadius: ".2rem", textTransform: "capitalize" }}
    />
  );
}

export default Tag;
