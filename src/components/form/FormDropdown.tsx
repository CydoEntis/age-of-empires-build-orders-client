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
  defaultValue: string;
  label: string;
  options: DropdownOption[];
};

function FromDropdown({
  name,
  control,
  defaultValue,
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
          defaultValue={defaultValue}
          fullWidth
          id="buildType"
          label={label}
          name="buildType"
          variant="outlined"
          autoFocus
          onChange={onChange}
          value={value}
        >
          {options.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}

export default FromDropdown;
