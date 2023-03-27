import { Grid, Box, Typography, TextField, Button, Link } from "@mui/material";

type Props = {};

function LoginForm({}: Props) {
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
          <Typography variant="h3">Log in</Typography>
          <Typography>Create or update your existing build orders!</Typography>
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
            id="password"
            label="Password"
            name="password"
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
            Log in
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Create one!"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default LoginForm;
