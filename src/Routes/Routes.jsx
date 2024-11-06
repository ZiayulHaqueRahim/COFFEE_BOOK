import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";

const routes = createBrowserRouter([
    {
        path: '/',
        element:  <MainLayout />,
        errorElement: <p>Error!!!!</p>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/coffees',
                element: <Coffees />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
        ],
    },
])



export default routes;