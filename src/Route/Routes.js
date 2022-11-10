import AddService from "../Component/AddService/AddService";
import Allservices from "../Component/AllServices/Allservices";
import Blog from "../Component/Blog/Blog";
import CardDetails from "../Component/CardDetails/CardDetails";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import MyReview from "../Component/MyReview/MyReview";
import Register from "../Component/Register/Register";
import UpdateReview from "../Component/UpdateReview/UpdateReview";
import Main from "../Layouts/Main";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://assignment-eleven-server-five.vercel.app/servicesh')

            },
            {
                path: '/allservices',
                element: <Allservices></Allservices>,
                loader: () => fetch('https://assignment-eleven-server-five.vercel.app/allservices')
            },
            {
                path: '/allservices/:id',
                element: <CardDetails></CardDetails>,
                loader: ({params}) => fetch(`https://assignment-eleven-server-five.vercel.app/allservices/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myreview',
                element:<PrivateRoute> <MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params})=> fetch(`https://assignment-eleven-server-five.vercel.app/review/${params.id}`)
            },
            {
                path:'/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    }
])
export default router;