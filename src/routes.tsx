import React from "react";
import { useRoutes } from "react-router-dom";

const AppRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: <>Home</>,
    },
  ]);

export default AppRoutes;
