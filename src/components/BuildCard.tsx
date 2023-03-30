import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import EnglishFlag from "../assets/english.png";

type Props = {};

function BuildCard({}: Props) {
  return (
    <Grid item md={2}>
      {/* sx={{ background: "white", color: "#333" }} */}
      <Card elevation={8}>
        <CardMedia component="img" height="140" image={EnglishFlag} />
        <CardContent>
          <Typography
            
            gutterBottom
            variant="h5"
            component="div"
          >
            White Tower Rush
          </Typography>
          <Typography variant="body2">
            Quickly rush to castle age, and send all villagers to enemy base to
            build your white castle ontop of their town center. Win by spamming
            battering rams.
          </Typography>
        </CardContent>
        <Stack direction="row" spacing={1} p={2}>
          <Chip label="Easy" color="success" />
          <Chip label="Cheese" color="warning" />
          <Chip label="Open" color="primary" />
        </Stack>
      </Card>
    </Grid>
  );
}

export default BuildCard;
