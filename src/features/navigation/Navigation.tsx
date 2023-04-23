import { Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logoutUser } from "../../store/slices/authSlice";

type Props = {};

function Navigation({}: Props) {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar color="secondary">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            BuildBuddy
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
            <Button href="/">Builds</Button>
          </Box>
          {token && (
            <>
              <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
                <Button href="/build/create">Create A Build</Button>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
                <Button onClick={handleLogout}>Logout</Button>
              </Box>
            </>
          )}
          {!token && (
            <>
              <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
                <Button href="/login" variant="contained">
                  Login
                </Button>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
                <Button href="/register" variant="outlined">
                  Register
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
