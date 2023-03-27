import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../features/navigation/Navigation";
import Navbar from "./Navbar";

type Props = {};

function Layout({}: Props) {
  return (
    <>
      <Navigation />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
