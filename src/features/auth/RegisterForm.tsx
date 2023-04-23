import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Paper } from "@mui/material";
import InputField from "../../components/InputField";

import { useForm } from "react-hook-form";
import { Register, registerUser } from "../../store/slices/authSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const defaultValues: Register = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

function RegisterForm() {
  const dispatch = useAppDispatch();

  const schema: ZodType<Register> = z
    .object({
      email: z.string().email(),
      username: z.string().min(3).max(20),
      password: z.string().min(6).max(20),
      confirmPassword: z.string().min(6).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const { handleSubmit, control } = useForm<Register>({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  function onSubmit(data: Register) {
    dispatch(registerUser(data));
  }

  return (
    <Grid component={Paper} item md={6}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        p={10}
      >
        <Box>
          <Typography variant="h3">Create an Account</Typography>
          <Typography>Start creating your build orders</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              id="email"
              label="Email"
              type="email"
              name="email"
              control={control}
            />
            <InputField
              id="username"
              label="Username"
              type="text"
              name="username"
              control={control}
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              name="password"
              control={control}
            />
            <InputField
              id="confirmPassword"
              label="Confrim Password"
              type="password"
              name="confirmPassword"
              control={control}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </form>

          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Log in!"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default RegisterForm;
