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
import DoctorProfile from "../Pages/doctorProfile/DoctorProfile";
import ManageDoctors from "../Pages/manageDoctors/ManageDoctors";
import Appointment from "../Pages/appointment/Appointment";
import About from "../Pages/about/About";
import Review from "../Pages/review/Review";
import ContactUs from "../Pages/contactUs/ContactUs";
import MyReview from "../Pages/myReview/MyReview";
import MyHistory from "../Pages/myHistory/MyHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/home/doctorProfile/:id",
        element: <DoctorProfile></DoctorProfile>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
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
        path: "/dashboard/myReview",
        element: <MyReview></MyReview>,
      },
      {
        path: "/dashboard/myHistory",
        element: <MyHistory></MyHistory>,
      },
      {
        path: "/dashboard/addADoctor",
        element: <AddADoctor></AddADoctor>,
      },
      {
        path: "/dashboard/manageDoctors",
        element: <ManageDoctors></ManageDoctors>,
      },
    ],
  },
]);

export default router;
