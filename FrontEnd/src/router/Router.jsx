
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Allproject from "../pages/Allproject";
import ErrorPage from "./Error";
import Myproject from "../pages/Myproject";
import AddIdea from "../pages/AddIdea";
import StudentRegister from '../pages/StudentRegister';
import StudentLogin from "../pages/StudentLogin";
import WelcomePage from "../pages/Welcome";

const router = createBrowserRouter([
 
    {
        path: "/",
        element: <WelcomePage/>,
        errorElement:<ErrorPage/>

    },
    {
        path: "/register",
        element: <StudentRegister />
    },
    {
        path: "/login",
        element: <StudentLogin />
    },
    {
        path: "/allproject",
        element: <Allproject />
    },
    {
        path: "/myproject",
        element: <Myproject />
    },
    {
        path: "/addidea",
        element: <AddIdea />
    },
  
    // {
    //     path: "*",
    //     element: <h1>404 Not Found</h1> 
    // }
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
