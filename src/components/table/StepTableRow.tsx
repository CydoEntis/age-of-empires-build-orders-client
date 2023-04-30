import {
  Box,
  Button,
  Dialog,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StepTableCell from "./StepTableCell";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { SlOptions } from "react-icons/sl";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { TbTypography } from "react-icons/tb";

type Props = {
  id: number;
  villagers: number;
  food: number;
  wood: number;
  gold: number;
  stone: number;
  step: string;
  isPreview?: boolean;
  deleteStep?: (id: number) => void;
};

function StepTableRow({
  id,
  villagers,
  food,
  wood,
  gold,
  stone,
  step,
  isPreview,
  deleteStep,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <StepTableCell item={villagers} align="center" />
      <StepTableCell item={food} type={"food"} align="center" />
      <StepTableCell item={wood} type={"wood"} align="center" />
      <StepTableCell item={gold} type={"gold"} align="center" />
      <StepTableCell item={stone} type={"stone"} align="center" />
      <StepTableCell item={step} />
      {isPreview && (
        <TableCell align="right">
          {deleteStep && (
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <SlOptions className="option-icon"/>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <FiEdit className="option-icon" />
                  <Typography color="#e9c56a" ml={2}>
                    Edit
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <FiTrash2 className="option-icon" />
                  <Typography color="#e9c56a" ml={2}>
                    Delete
                  </Typography>
                </MenuItem>
              </Menu>
            </div>

            // <div>
            //   <SlOptions
            //     // onClick={() => deleteStep(id)}
            //     onClick={toggleOptions}
            //     className="icon"
            //   />
            //   <Menu
            //     onClose={() => setIsOpen(false)}
            //     open={isOpen}
            //   >
            //     <MenuItem>
            //       <FiTrash2 /> Delete
            //     </MenuItem>
            //     <MenuItem>
            //       <FiEdit /> Edit
            //     </MenuItem>
            //   </Menu>
            // </div>
          )}
        </TableCell>
      )}
    </TableRow>
  );
}

export default StepTableRow;
