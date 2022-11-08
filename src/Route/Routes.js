import Allservices from "../Component/AllServices/Allservices";
import Home from "../Component/Home/Home";
import Main from "../Layouts/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/servicesh')
            },
            {
                path: '/allservices',
                element: <Allservices></Allservices>,
                loader: () => fetch('http://localhost:5000/allservices')
            }
        ]
    }
])
export default router;