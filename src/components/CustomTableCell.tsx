import { TableCell } from "@mui/material";

type Props = {
  item: string | number;
  type?: string;
  align?: "left" | "center" | "right" | "justify";
};

function CustomTableCell({ item, type, align }: Props) {
  let color = "";
  switch (type) {
    case "food":
      color = "#ff61615d";
      break;
    case "wood":
      color = "#ffc0615d";
      break;
    case "gold":
      color = "#ffea2b77";
      break;
    case "stone":
      color = "#fdedd65d";
      break;
    default:
      color = "";
      break;
  }

  return (
    <TableCell
      align={align}
      sx={{
        backgroundColor: `${color}`,
        fontFamily: "Inter",
        fontSize: "1.45rem",
      }}
    >
      {item}
    </TableCell>
  );
}

export default CustomTableCell;
