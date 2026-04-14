import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import FriendDetails from "../Pages/FriendDetails";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import NotFound from "../Pages/NotFound";
import friendsData from "../Data/Friends.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => friendsData,
      },
      {
        path: "friend/:id",
        element: <FriendDetails />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;