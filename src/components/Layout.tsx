import { Outlet } from "react-router-dom";
import Navigation from "../features/navigation/Navigation";

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
