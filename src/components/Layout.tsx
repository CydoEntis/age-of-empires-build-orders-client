import { createTheme, ThemeProvider } from "@mui/system";
import { Outlet } from "react-router-dom";
import Navigation from "../features/navigation/Navigation";

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
        <main className="">
          <Outlet />
        </main>
    </>
  );
}

export default Layout;
