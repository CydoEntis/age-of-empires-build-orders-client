import { Grid, Box, Typography, Button, Link, Paper } from "@mui/material";
import FormInput from "../../components/form/FormInput";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useForm } from "react-hook-form";
import { LoginDetails, loginUser } from "../../store/slices/authSlice";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import BaseContainer from "../../components/layout/BaseContainer";

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
    navigate("/");
  }

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={4}
      xl={4}
      py={5}
      px={2}
      order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
      component={Paper}
      elevation={8}
      sx={{
        height: {xs: "100vh", sm: "650px", lg: "750px"},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: {md: "0 .4rem .4rem 0"},
      }}
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
        <Link component={NavLink} to="/register" variant="body2">
          Don't have an account? Create one!"
        </Link>
      </Box>
    </Grid>
  );
}

export default LoginForm;
