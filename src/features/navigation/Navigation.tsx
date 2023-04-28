import { Icon, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logoutUser } from "../../store/slices/authSlice";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";

type Props = {
  token: string;
  toggleNav: () => void;
  handleLogout: () => void;
};

function Navigation({ token, toggleNav, handleLogout }: Props) {
  const username = useAppSelector(state => state.auth.username);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar color="secondary">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            BuildBuddy
          </Typography>
          <Icon
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={toggleNav}
          >
            <HiOutlineMenuAlt3 fontSize="1.5rem" color="#e9c56a" />
          </Icon>

          <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
            <Button
              sx={{
                "&:active": {
                  color: "purple",
                  background: "orange",
                },
              }}
              component={NavLink}
              to="/"
            >
              Builds
            </Button>
          </Box>
          {token && (
            <>
              <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
                <Button component={NavLink} to="/builds/create">Create A Build</Button>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
                <Button component={NavLink} to={`/builds/?username=${username}`} >My Builds</Button>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
                <Button onClick={handleLogout}>Logout</Button>
              </Box>
            </>
          )}
          {!token && (
            <>
              <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
                <Button component={NavLink} to="/login" variant="contained">
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
