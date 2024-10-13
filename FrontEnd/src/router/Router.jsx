
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Allproject from "../pages/Allproject";
import ErrorPage from "./Error";
import Myproject from "../pages/Myproject";
import AddIdea from "../pages/AddIdea";

import StudentRegister from '../pages/StudentRegister';
import StudentLogin from "../pages/StudentLogin";
import WelcomePage from "../pages/Welcome";
import Footer from "../components/Footer";

const router = createBrowserRouter([
 
    
    // {
    //     path: "/Welcome",
    //     element: <Welcome/>
    // },
    // {
    //     path: "/register",
    //     element: <StudentRegister />
    // },
    // {
    //     path: "/login",
    //     element: <StudentLogin />
    // },
  
    // {
    //     path: "*",
    //     element: <h1>404 Not Found</h1> 
    // }
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
