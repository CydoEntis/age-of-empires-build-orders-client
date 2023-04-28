import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import BuildPage from "../pages/BuildPage";
import BuildsPage from "../pages/BuildsPage";
import CreateBuild from "../pages/CreateBuildPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { useAppSelector } from "../hooks/reduxHooks";
import MyBuildsPage from "../pages/MyBuildsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "",
        element: <BuildsPage />,
      },
      {
        path: "builds/create",
        element: <CreateBuild />,
      },
      {
        path: "builds/:buildId",
        element: <BuildPage />,
      },
      {
        path: `builds/`,
        element: <MyBuildsPage />,
      },
    ],
  },
]);
