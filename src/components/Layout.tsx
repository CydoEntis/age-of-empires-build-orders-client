import { createTheme, ThemeProvider } from "@mui/system";
import { Outlet } from "react-router-dom";
import Navigation from "../features/navigation/Navigation";
import MobileNav from "../features/navigation/MobileNav";

type Props = {};

function Layout({}: Props) {
  // const theme = createTheme({
  //   palette: {
  //     secondary: {
  //       main: "#333",
  //     },
  //   },
  // });



  return (
    <>
        <Navigation />
        <MobileNav />
        <main className="">
          <Outlet />
        </main>
    </>
  );
}

export default Layout;
