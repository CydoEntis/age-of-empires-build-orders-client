import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Paper,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import EnglishFlag from "../assets/english.png";
import React from "react";

type Props = {};

function StepCard({}: Props) {
  return (
    <Grid component={Paper} container marginTop={10}>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={4}
        component="img"
        src={EnglishFlag}
        sx={{
          minHeight: "100px",
          maxHeight: "350px",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        md={7}
        lg={8}
        py={2}
        px={2}
      >
        <Typography
          sx={{ fontFamily: "Inter", fontSize: { xs: "1.5rem", sm: "2.25rem" } }}
          variant="h4"
        >
          White Castle Rush
        </Typography>
        <Typography sx={{ fontFamily: "Inter" }} variant="subtitle2">
          Rush to castle age, and send all your villagers to the enemies town
          center, build your Castle Age building the White Tower on the enemies
          Town center. Spamming battering rams to quickly destroy their base
          while having your White Tower defend you.
        </Typography>
        <Stack direction="row" spacing={1} mt={2}>
          <Chip label="Easy" color="success" />
          <Chip label="Cheese" color="warning" />
          <Chip label="Open" color="primary" />
        </Stack>
        <Stack direction="row" spacing={1} mt={2}>
          <Typography color="lightgrey">Created by: Some Dousche</Typography>
        </Stack>
        <Stack direction="row" spacing={1} mt={2}>
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </Stack>
      </Grid>
    </Grid>
    // <Card sx={{ maxWidth: 345, marginTop: "10rem" }} >
    //   <CardMedia
    //     sx={{ height: 140 }}
    //     image={EnglishFlag}
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       White Tower Rush
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Share</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}

export default StepCard;
