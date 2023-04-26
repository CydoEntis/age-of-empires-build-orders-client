import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Chip,
  Stack,
  Box,
  Paper,
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
import Tag from "./tag/Tag";
import { Link } from "react-router-dom";

function BuildCard({
  id,
  title,
  description,
  createdBy,
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
    <Link style={{textDecoration: "none"}} to={`/builds/${id}`}>
      <Card
        elevation={8}
        component={Paper}
        sx={{ display: "flex", flexDirection: {xs: "column", sm: "row" }, borderRadius: ".2rem", marginBotton: "6px" }}
      >
        <Box sx={{ width: {xs: "100%", sm: "300px" }, position: "relative" }}>
          <Box
            className="img-overlay"
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 99,
            }}
          />
          <Box
            component="img"
            sx={{ width: "100%" }}
            height="100%"
            src={image}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5" >
              {title}
            </Typography>
            {
              description && (
                <Typography variant="subtitle1"  mb={2}>
                {description}
              </Typography>
              )
            }
            <Stack direction="row" flexWrap="wrap"  >
              <Tag text={createdBy} />
              <Tag text={difficulty} />
              <Tag text={mapType} />
              <Tag text={buildType} />
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
}

export default BuildCard;
