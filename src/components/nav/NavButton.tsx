import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
};

function NavButton({ to }: Props) {
  return (
    <NavLink className={({isActive}) => isActive ? "active" : ""}to={to}>
      <Button>Builds</Button>
    </NavLink>
  );
}

export default NavButton;
