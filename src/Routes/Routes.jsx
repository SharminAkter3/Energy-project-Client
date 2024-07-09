import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Dashboard from "../Layout/Dashboard";
import Teachers from "../Pages/Dashboard/Teachers/Teachers";
// import PrivateRoute from "./PrivateRoute";
import AddTeachers from "../Pages/Dashboard/Teachers/AddTeachers";
import TeacherProfile from "../Pages/Dashboard/Teachers/TeacherProfile";
import User from "../Pages/Dashboard/User/User";
import Services from "../Pages/Dashboard/Services/Services";
import Blog from "../Pages/Dashboard/Blog/Blog";
import Invoice from "../Pages/Dashboard/Invoice/Invoice";
import Upload from "../Pages/Signup/Upload/Upload";

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


      // sharmin akter section
      {
        path: 'teachers',
        element: <Teachers></Teachers>,
      },
      {
        path: 'add_teachers',
        element: <AddTeachers></AddTeachers>
      },
      {
        path: "teacher_profile/:teacherId",
        element: <TeacherProfile></TeacherProfile>
      },
    

    ],
  },
]);
