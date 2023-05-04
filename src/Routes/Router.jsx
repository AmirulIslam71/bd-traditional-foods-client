import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Banner from "../HomePage/Banner/Banner";
import ChefsList from "../HomePage/ChefsList/ChefsList";
import Home from "../HomePage/Home/Home";
import Register from "../Shared/Register/Register";
import Login from "../Shared/Login/Login";
import Blogs from "../HomePage/Blogs/Blogs";
import ChefsDetails from "../Shared/ChefsDetails/ChefsDetails";
import ChefsLayout from "../Layouts/ChefsLayout";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://bd-traditionals-foods-server-amirulislam71.vercel.app/allData"
          ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "chefsDetails",
    element: <ChefsLayout></ChefsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRouter>
            <ChefsDetails></ChefsDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bd-traditionals-foods-server-amirulislam71.vercel.app/allData/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
