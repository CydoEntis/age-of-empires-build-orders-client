import { Box, Drawer, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import NavButton from "../../components/nav/NavButton";
import { useAppSelector } from "../../hooks/reduxHooks";
import ClickAwayListener from "@mui/base/ClickAwayListener";

type Props = {
  token: string;
  onClose: () => void;
  isOpen: boolean;
  handleLogout: () => void;
};
// TODO: Add mobile navigation
// TODO: Add active links to buttons
// TODO: Implement editing and deleting of builds
// TODO: Add pagination
// TODO: Add refresh tokens
function MobileNav({ token, onClose, isOpen, handleLogout }: Props) {
  const username = useAppSelector((state) => state.auth.username);
  return (
      <Drawer  anchor="right" open={isOpen} onClose={onClose}>
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

              <Box mb={4}>
                <NavButton onClick={onClose} to={"/"} text="builds" />
              </Box>
              {token && (
                <>
                  <Box mb={4}>
                    <NavButton
                      onClick={onClose}
                      to={"/builds/create"}
                      text="create a build"
                    />
                  </Box>
                  <Box mb={4}>
                    <NavButton
                      onClick={onClose}
                      to={`/builds/?username=${username}`}
                      text="my builds"
                    />
                  </Box>
                  <Box mb={4}>
                    <Button onClick={handleLogout}>Logout</Button>
                  </Box>
                </>
              )}
              {!token && (
                <>
                  <Box mb={4}>
                    <Button component={NavLink} to="/login" variant="contained">
                      Login
                    </Button>
                    <NavButton onClick={onClose} to="/login" text="login" />
                  </Box>
                  <Box mb={4}>
                    <NavButton
                      onClick={onClose}
                      to="/register"
                      text="register"
                    />
                  </Box>
                </>
              )}
              <Box
                textAlign="center"
                sx={{ display: { xs: "block", lg: "none" } }}
              >
                <SlClose onClick={onClose} className="icon" />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Drawer>
  );
}

export default MobileNav;
