import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  onClick?: () => void;
  text: string;
};

function NavButton({ to, onClick, text }: Props) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active base" : "base")}
      to={to}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
}

export default NavButton;
