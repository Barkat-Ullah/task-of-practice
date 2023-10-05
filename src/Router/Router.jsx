import { createBrowserRouter } from "react-router-dom";
import Root from "../Layuot/Root";
import Home from "../Page/Home/Home";
import Login from "../Page/login/Login";
import Register from "../Page/Register/Register";
import Signin from "../Page/Home/Signin/Signin";


const router = createBrowserRouter([
   {
    path:"/",
    element:<Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
    {    
        path: "/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/signIn",
        element:<Signin></Signin>
    }
    ]
   }
    
]);
export default router