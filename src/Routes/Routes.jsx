import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Authentication from "../Layouts/Authentication";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import AllUsers from "../Pages/allUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "authentication",
    element: <Authentication></Authentication>,
    children: [
      {
        path: "/authentication/login",
        element: <Login></Login>,
      },
      {
        path: "/authentication/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard/allUsers",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
