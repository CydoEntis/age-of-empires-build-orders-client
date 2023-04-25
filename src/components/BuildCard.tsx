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
import AbbasidFlag from "../assets/abbasid.png";
import ChineseFlag from "../assets/chinese.png";
import EnglishFlag from "../assets/english.png";
import DehliFlag from "../assets/dehli.png";
import HreFlag from "../assets/hre.png";
import FrenchFlag from "../assets/french.png";
import MalianFlag from "../assets/malian.png";
import MongolFlag from "../assets/mongol.png";
import OttomanFlag from "../assets/ottoman.png";
import RusFlag from "../assets/rus.png";
import { Build } from "../store/slices/buildSlice";

function BuildCard({
  title,
  description,
  civilization,
  difficulty,
  mapType,
  buildType,
}: Build) {
  let image;
  switch (civilization) {
    case "ABBASID_DYNASTY":
      image = AbbasidFlag;
      break;
    case "CHINESE":
      image = ChineseFlag;
      break;
    case "ENGLISH":
      image = EnglishFlag;
      break;
    case "DELHI_SULTANTE":
      image = DehliFlag;
      break;
    case "FRENCH":
      image = FrenchFlag;
      break;
    case "HOLY_ROMAN_EMPIRE":
      image = HreFlag;
      break;
    case "MALIANS":
      image = MalianFlag;
      break;
    case "MONGOLS":
      image = MongolFlag;
      break;
    case "OTTOMANS":
      image = OttomanFlag;
      break;
    case "RUS":
      image = RusFlag;
      break;
    default:
      break;
  }

  return (
    <Grid item md={2} sx={{ minWidth: "350px" }}>
      <Card elevation={8}>
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <Stack direction="row" spacing={1} p={2}>
          <Chip label={difficulty} color="success" />
          <Chip label={buildType} color="warning" />
          <Chip label={mapType} color="primary" />
        </Stack>
      </Card>
    </Grid>
  );
}

export default BuildCard;
