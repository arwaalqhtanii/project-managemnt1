
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import StudentRegister from '../pages/StudentRegister'
// import StudentLogin from "../pages/StudentLogin";
// import WelcomePage from "../pages/Welcome";

// const router = createBrowserRouter([
 
    
//     {
//         path: "/Welcome",
//         element: <WelcomePage/>
//     },
//     {
//         path: "/register",
//         element: <StudentRegister />
//     },
//     {
//         path: "/login",
//         element: <StudentLogin />
//     },
  
//     {
//         path: "*",
//         element: <h1>404 Not Found</h1> 
//     }
// ]);

// const Router = () => {
//     return (
//         <RouterProvider router={router} />
//     );
// };

// export default Router;


import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import StudentRegister from '../pages/StudentRegister';
import StudentLogin from "../pages/StudentLogin";
import WelcomePage from "../pages/Welcome";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/welcome" replace /> // Redirect root path to /welcome
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
        path: "*",
        element: <h1>404 Not Found</h1> 
    }
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
