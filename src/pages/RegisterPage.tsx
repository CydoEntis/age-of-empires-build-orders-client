import Grid from "@mui/material/Grid";
import AuthImage from "../features/auth/AuthImage";
import AuthWrapper from "../features/auth/AuthWrapper";
import RegisterForm from "../features/auth/RegisterForm";
import BaseContainer from "../components/layout/BaseContainer";

type Props = {};

function register({}: Props) {
  const handleSubmit = () => {};

  return (
    <div className="centered-content">
      <BaseContainer>
        <Grid container sx={{ margin: "0 auto" }}>
          <AuthImage />
          <RegisterForm />
        </Grid>
      </BaseContainer>
    </div>
  );
}

export default register;
