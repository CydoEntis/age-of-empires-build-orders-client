import { Box, Drawer, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  token: string;
  toggleNav: () => void;
  isOpen: boolean;
  handleLogout: () => void;
};
// TODO: Add mobile navigation
// TODO: Add active links to buttons
// TODO: Implement editing and deleting of builds
// TODO: Add pagination
// TODO: Add refresh tokens
function MobileNav({ token, toggleNav, isOpen, handleLogout }: Props) {
  return (
    <Drawer anchor="right" open={isOpen}>
      <Box sx={{ width: 250 }} role="presentation">
        <Stack
          spacing={3}
          textAlign="center"
          justifyContent="space-between"
          height="100vh"
          p={3}
        >
          <Box>
            <Typography variant="h5" my={5}>
              Build Buddy
            </Typography>
            <Button
              component={NavLink}
              to="/"
              onClick={toggleNav}
              variant="contained"
              sx={{ mb: 3 }}
            >
              Builds
            </Button>
            {token && (
              <Button
                component={NavLink}
                to="/builds/create"
                variant="contained"
                onClick={toggleNav}
              >
                Create A Build
              </Button>
            )}
          </Box>
          <Box>
            {token && <Button onClick={handleLogout}>Logout</Button>}
            {!token && (
              <Stack spacing={3}>
                <Button
                  onClick={toggleNav}
                  component={Link}
                  to="/login"
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  onClick={toggleNav}
                  component={Link}
                  to="/register"
                  variant="outlined"
                >
                  Register
                </Button>
              </Stack>
            )}
          </Box>
          <Box textAlign="center" sx={{ display: { xs: "block", sm: "none" } }}>
            <AiFillCloseCircle
              fontSize="2rem"
              color="#e9c56a"
              onClick={toggleNav}
            />
          </Box>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default MobileNav;
