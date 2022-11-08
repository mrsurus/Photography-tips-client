import Allservices from "../Component/AllServices/Allservices";
import CardDetails from "../Component/CardDetails/CardDetails";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
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
            },
            {
                path: '/allservices/:id',
                element: <CardDetails></CardDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/allservices/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;