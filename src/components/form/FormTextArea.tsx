import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

type Props = {
  id?: string;
  name: string;
  label: string;
  control: any;
  variant: "standard" | "outlined" | "filled" | undefined;
};

function FormTextArea({ name, control, id, label, variant }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          multiline
          rows={4}
          margin="normal"
          fullWidth
          id={id}
          label={label}
          name={name}
          variant={variant}
          onChange={onChange}
        />
      )}
    />
  );
}

export default FormTextArea;
