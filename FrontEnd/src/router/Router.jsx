
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import StudentRegister from '../pages/StudentRegister';
import StudentLogin from "../pages/StudentLogin";
import WelcomePage from "../pages/Welcome";
import Footer from "../components/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/welcome" replace /> 
    },
    {
        path: "/welcome",
        element: <WelcomePage />
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
        path: "/footer",
        element: <Footer />
    },
 

    {
        path: "*",
        element: <h1>404 Not Found</h1> 
    }
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
