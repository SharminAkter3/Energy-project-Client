import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Dashboard from "../Layout/Dashboard";
// import PrivateRoute from "./PrivateRoute";
import User from "../Pages/Dashboard/User/User";
import Services from "../Pages/Dashboard/Services/Services";
import Blog from "../Pages/Dashboard/Blog/Blog";
import Invoice from "../Pages/Dashboard/Invoice/Invoice";
import Upload from "../Pages/Dashboard/Upload/Upload";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact/Contact";
import OurService from "../Pages/OurService/OurService/OurService";
import OurProduct from "../Pages/OurProduct/OurProduct/OurProduct";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'our_service',
        element: <OurService></OurService>
      },
      {
        path: 'our_product',
        element: <OurProduct></OurProduct>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: 'dashboard',
    // element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'user',
        element: <User></User>,
      },

      {
        path: 'services',
        element: <Services></Services>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path: 'invoice',
        element: <Invoice></Invoice>,
      },
      {
        path: 'upload',
        element: <Upload></Upload>,
      },


    ],
  },
]);
