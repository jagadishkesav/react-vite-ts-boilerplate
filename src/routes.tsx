import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { HOME } from "./constants/routes";

export const AppRoutes = () =>
  useRoutes([
    {
      path: HOME,
      element: <Home />,
    },
  ]);
