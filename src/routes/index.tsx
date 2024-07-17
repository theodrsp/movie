import Authentication from "../features/auth";
import Detail from "../features/detail";
import Home from "../features/home";
import Layout from "../components/layout";
import Movie from "../features/movie";
import ProtectedRoutes from "./protected-routes";
import TVShow from "../features/tv-show";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/detail",
            element: <Detail />,
          },
          {
            path: "/movie",
            element: <Movie />,
          },
          {
            path: "/tv-show",
            element: <TVShow />,
          },
        ],
      },
    ],
  },
]);
