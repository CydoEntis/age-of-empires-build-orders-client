import React from 'react'
import { NavLink } from "react-router-dom";

type Props = {
    to: string;
    text: string;
}

function NavItem({ to, text }: Props) {
  return (
    <NavLink className="is-primary navbar-item has-text-light is-capitalized" to={to}>{text}</NavLink>
  )
}

export default NavItem