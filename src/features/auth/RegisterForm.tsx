import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

type Props = {};

function RegisterForm({}: Props) {
  return (
    <Grid item md={6} sx={{ background: "white" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        p={10}
      >
        <Box component="form">
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
            color="primary"
            sx={{ backgroundColor: "white" }}
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
            color="primary"
            sx={{ backgroundColor: "white" }}
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
            color="primary"
            sx={{ backgroundColor: "white" }}
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
            color="primary"
            sx={{ backgroundColor: "white" }}
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
