import "./App.css";

import "./index.scss";
import Card from "./components/BuildCard";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import BuildCard from "./components/BuildCard";
import { Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/material";

function App() {
  return (
      <Box sx={{
        background: "radial-gradient(circle, rgba(28,40,69,1) 25%, rgba(14,16,25,1) 64%, rgba(6,15,38,1) 96%)",
        padding: "5rem",
        paddingTop: "7rem",
        minHeight: "100vh"


      }}>
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
