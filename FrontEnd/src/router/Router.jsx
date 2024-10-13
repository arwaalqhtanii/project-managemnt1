
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Allproject from "../pages/Allproject";
import ErrorPage from "./Error";
import Myproject from "../pages/Myproject";
import AddIdea from "../pages/AddIdea";
// import Home from './pages/Home';
// import StudentRegister from './components/StudentRegister';
// import StudentLogin from './components/StudentLogin';
// import Welcome from "./pages/Welcome";

const router = createBrowserRouter([
 
    
    {
        path: "/Allproject",
        element: <AddIdea/>,
        errorElement:<ErrorPage/>,
    },
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
    return (
        <RouterProvider router={router} />
    );
};

export default Router;