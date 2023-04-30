import { createTheme, ThemeProvider } from "@mui/system";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../../features/navigation/Navigation";
import MobileNav from "../../features/navigation/MobileNav";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logoutUser } from "../../store/slices/authSlice";
import ScrollToTop from "../util/ScrollToTop";

type Props = {};

function Layout({}: Props) {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function openNav() {
    setIsOpen(true);
  }

  function closeNav() {
    setIsOpen(false);
  }

  function handleLogout() {
    dispatch(logoutUser());
    setIsOpen(false);
    navigate("/");
  }

  return (
    <>
      <Navigation
        token={token}
        onOpen={openNav}
        handleLogout={handleLogout}
      />
      <MobileNav
        token={token}
        onClose={closeNav}
        isOpen={isOpen}
        handleLogout={handleLogout}
      />
      <main className="">
        <ScrollToTop />
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
