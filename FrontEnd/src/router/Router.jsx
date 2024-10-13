
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from './pages/Home';
// import StudentRegister from './components/StudentRegister';
// import StudentLogin from './components/StudentLogin';
// import Welcome from "./pages/Welcome";

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
    return (
        <RouterProvider router={router} />
    );
};

export default Router;