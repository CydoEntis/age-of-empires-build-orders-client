import Grid from "@mui/material/Grid";
import AuthImage from "../features/auth/AuthImage";
import AuthWrapper from "../features/auth/AuthWrapper";
import RegisterForm from "../features/auth/RegisterForm";

type Props = {};

function register({}: Props) {
  const handleSubmit = () => {};

  return (
    <AuthWrapper>
      <AuthImage />
      <RegisterForm />
    </AuthWrapper>
  );
}

export default register;
