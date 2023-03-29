import "./App.css";

import "./index.scss";
import BuildCard from "./components/BuildCard";
import { Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        padding: "5rem",
        paddingTop: "7rem",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={2}>
        <BuildCard />
        <BuildCard />
        <BuildCard />
        <BuildCard />
        <BuildCard />
        <BuildCard />
        <BuildCard />
      </Grid>
    </Box>
  );
}

export default App;
