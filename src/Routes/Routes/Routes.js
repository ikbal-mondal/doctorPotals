import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Contact from "../../Pages/Contact/Contact";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddedDoctor from "../../Pages/Dashboard/Dashboard/AddedDoctor/AddedDoctor";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ReviewsPage from "../../Pages/ReviewsPage/ReviewsPage";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children:[
        {
         path:'/',
         element:<Home> </Home>
        },
        {
         path:'/home',
         element:<Home> </Home>
        },
        {
            path:'/Signup',
            element:<SignUp></SignUp>
       },
        {
            path:'/login',
            element:<Login></Login>
       },
        {
            path:'/appointment',
            element:<Appointment></Appointment>
       },
        {
            path:'/reviewspage',
            element:<ReviewsPage></ReviewsPage>
       },
        {
            path:'/about',
            element:<About></About>
       },
        {
            path:'/contact',
            element:<Contact></Contact>
       },

    ]
  },

  {
    path:'/dashboard',
    element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
    errorElement: <DisplayError></DisplayError>,
    children:[
      {
        path:'/dashboard',
        element: <MyAppointment></MyAppointment>
      },
      {
        path:'/dashboard/allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'/dashboard/addeddocter',
        element: <AdminRoute><AddedDoctor></AddedDoctor></AdminRoute>
      },
      {
        path:'/dashboard/managedoctors',
        element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
      },
      {
        path:'/dashboard/payment/:id',
        element: <AdminRoute><Payment></Payment></AdminRoute>,
        loader: ({params} )=> fetch(`https://doctors-portal-server-b1sdo6rmh-ikbal-mondal.vercel.app/bookings/${params.id}`)
      },
    ]
  }
])