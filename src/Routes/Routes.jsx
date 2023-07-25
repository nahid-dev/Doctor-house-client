import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Authentication from "../Layouts/Authentication";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import AllUsers from "../Pages/allUsers/AllUsers";
import PrivetRoute from "./PrivetRoute";
import MyAppointment from "../Pages/myAppointment/MyAppointment";
import AddADoctor from "../Pages/addADoctor/AddADoctor";

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
    path: "dashboard/",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/myAppointment",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/addADoctor",
        element: <AddADoctor></AddADoctor>,
      },
    ],
  },
]);

export default router;
