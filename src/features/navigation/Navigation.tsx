import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

type Props = {};

function Navigation({}: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          background: "linear-gradient(90deg, #181c29, #394766 40%, #181c29)",
          borderBottom: "1px solid #b8862d",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            BuildBuddy
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
            <Button
              href="/"
              sx={{
                color: "#fff",
                "&:hover": { background: "#126189", color: "white" },
              }}
            >
              Builds
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
            <Button
              href="/login"
              variant="contained"
              sx={{
                color: "#fff",
                background: "#126189",
                "&:hover": { background: "#0e4e6e", color: "white" },
              }}
            >
              Login
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }} mx={1}>
            <Button
              href="/register"
              variant="outlined"
              sx={{ 
                color: "#fff", 
                border: "1px solid #126189",
                "&:hover": { background: "#b8862d", color: "white", border: "1px solid #b8862d" }
            }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
