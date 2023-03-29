import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Paper } from "@mui/material";

type Props = {};

function RegisterForm({}: Props) {
  return (
    <Grid component={Paper} item md={6} >
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
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            variant="standard"
            autoFocus
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            variant="standard"
            autoFocus
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            variant="standard"
            autoFocus
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            name="comfirmPassword"
            variant="standard"
            autoFocus
            onChange={(e) => console.log(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
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
