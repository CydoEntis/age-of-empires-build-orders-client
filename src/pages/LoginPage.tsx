import { Grid } from "@mui/material";
import BaseContainer from "../components/layout/BaseContainer";
import AuthImage from "../features/auth/AuthImage";
import AuthWrapper from "../features/auth/AuthWrapper";
import LoginForm from "../features/auth/LoginForm";

type Props = {};

function login({}: Props) {
  return (
    <div className="centered-content">
      <BaseContainer>
        <Grid container sx={{ margin: "0 auto" }}>
          <AuthImage />
          <LoginForm />
        </Grid>
      </BaseContainer>
    </div>
  );
}

export default login;
