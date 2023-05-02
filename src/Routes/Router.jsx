import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Banner from "../HomePage/Banner/Banner";
import ChefsList from "../HomePage/ChefsList/ChefsList";
import Home from "../HomePage/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://bd-traditionals-foods-server-amirulislam71.vercel.app/allData"
          ),
      },
    ],
  },
]);

export default router;
