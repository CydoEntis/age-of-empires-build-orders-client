import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  id?: string;
  name: string;
  label: string;
  control: any;
  type: "text" | "password" | "email" | "number";
  variant: "standard" | "outlined" | "filled" | undefined;
};

function FormInput({ name, control, id, label, type, variant }: Props) {
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
          inputProps={{
            autoComplete: "off",
          }}
          helperText={error ? error.message : null}
          error={!!error}
          margin="normal"
          fullWidth
          id={id}
          label={label}
          name={name}
          variant={variant}
          value={value}
          onChange={(e) => {
            if (type === "number") {
              return onChange(parseInt(e.target.value));
            } else {
              return onChange(e.target.value);
            }
          }}
          type={type}
        />
      )}
    />
  );
}

export default FormInput;
