import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import {
  BuildType,
  Civilization,
  Difficulty,
  MapType,
} from "../../features/create-build/BuildForm";

interface DropdownOption {
  value: string;
  label: string;
}

type DropdownProps = {
  name: string;
  control: any;
  label: string;
  options: DropdownOption[];
};

function FromDropdown({
  name,
  control,
  label,
  options,
}: DropdownProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          select
          defaultValue=""
          fullWidth
          label={label}
          name={name}
          variant="outlined"
          autoFocus
          onChange={onChange}
          value={value || ""}
        >
          {options.map((option: any) => (
            <MenuItem key={option.value} value={option.value} defaultValue="">
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}

export default FromDropdown;
