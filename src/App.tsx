import "./App.css";

import "./index.scss";
import BuildCard from "./components/BuildCard";
import { Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [builds, setBuilds] = useState([]);
  
  // useEffect(() => {
  //   async function allBuilds() {
  //     const res = await axios("http://localhost:8080/api/v1/builds");
  //     setBuilds(res.data);
  //   }

  //   allBuilds();

  // }, []) 

  // console.log(builds);

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
