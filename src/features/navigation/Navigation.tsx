import { Icon, Link, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logoutUser } from "../../store/slices/authSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import NavButton from "../../components/nav/NavButton";

type Props = {
  token: string;
  onOpen: () => void;
  handleLogout: () => void;
};

function Navigation({ token, onOpen, handleLogout }: Props) {
  const username = useAppSelector((state) => state.auth.username);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar color="secondary">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            BuildBuddy
          </Typography>
          <Icon
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={onOpen}
          >
            <RxHamburgerMenu fontSize="1.5rem" color="#e9c56a" />
          </Icon>

          <Box
            sx={{
              display: { xs: "none", md: "inline-block" },
            }}
            mx={1}
          >
            <NavButton to={"/"} text="builds" />
          </Box>
          {token && (
            <>
              <Box sx={{ display: { xs: "none", md: "block" } }} mx={1}>
                <NavButton to={"/builds/create"} text="create a build" />
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }} mx={1}>
                <NavButton
                  to={`/builds/?username=${username}`}
                  text="my builds"
                />
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }} mx={1}>
                <Button onClick={handleLogout}>Logout</Button>
              </Box>
            </>
          )}
          {!token && (
            <>
              <Box sx={{ display: { xs: "none", md: "block" } }} mx={1}>
                <Button component={NavLink} to="/login" variant="contained">
                  Login
                </Button>
                <NavButton to="/login" text="login" />
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }} mx={1}>
                <NavButton
                  to="/register"
                  text="register"
                />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
