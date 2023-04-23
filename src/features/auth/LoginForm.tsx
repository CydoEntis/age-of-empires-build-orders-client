import { Grid, Box, Typography, Button, Link, Paper } from "@mui/material";
import FormInput from "../../components/form/FormInput";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useForm } from "react-hook-form";
import { LoginDetails, loginUser } from "../../store/slices/authSlice";
import { redirect, useNavigate } from "react-router-dom";

const defaultValues: LoginDetails = {
  username: "",
  password: "",
};
function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<LoginDetails>({
    defaultValues: defaultValues,
  });

  function onSubmit(data: LoginDetails) {
    dispatch(loginUser(data));
    console.log("redirecting...")
    navigate("/")
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
          <Typography variant="h3">Log in</Typography>
          <Typography>Create or update your existing build orders!</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              id="username"
              label="Username"
              type="text"
              name="username"
              control={control}
              variant="standard"
            />
            <FormInput
              id="password"
              label="Password"
              type="password"
              name="password"
              control={control}
              variant="standard"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
          </form>
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
